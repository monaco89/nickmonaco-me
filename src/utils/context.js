import React, { createContext } from "react"

export const PlayerContext = createContext(() => false)

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
  player: false,
}

function reducer(state, [type]) {
  switch (type) {
    case "TOGGLE_PLAYER":
      return {
        ...state,
        player: !state.player,
      }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider
