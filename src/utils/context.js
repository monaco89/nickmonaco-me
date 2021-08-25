import React, { createContext } from 'react';
import { light, dark } from '../constants/globalTheme';

export const PlayerContext = createContext(() => false);

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();
const ThemeContext = React.createContext();

const windowGlobal = typeof window !== 'undefined' && window;

// const supportsDarkMode = () =>
//   windowGlobal &&
//   windowGlobal.matchMedia("(prefers-color-scheme: dark)").matches === true

// const checkLocalStorage =
//   (windowGlobal && JSON.parse(windowGlobal.localStorage.getItem("dark"))) ||
//   supportsDarkMode()

const checkLocalStorage =
  windowGlobal && JSON.parse(windowGlobal.localStorage.getItem('dark'));

const initialState = {
  player: false,
  dark: checkLocalStorage,
  themeLoaded: checkLocalStorage ? dark : light,
  // toggleDark: () => {},
};

function reducer(state, [type]) {
  switch (type) {
    case 'TOGGLE_PLAYER':
      return {
        ...state,
        player: !state.player,
      };
    case 'TOGGLE_THEME':
      windowGlobal.localStorage.setItem('dark', JSON.stringify(!state.dark));
      return {
        ...state,
        dark: !state.dark,
        themeLoaded: !state.dark ? dark : light,
      };
    default:
      throw new Error('Bad Action Type');
  }
}

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <ThemeContext.Provider
          value={{
            themeLoaded: state.themeLoaded,
            dark: state.dark,
            // toggleDark: toggleDark,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
