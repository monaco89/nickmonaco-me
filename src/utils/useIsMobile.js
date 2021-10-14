import React from 'react';

function useIsMobile() {
  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = React.useState(
    isBrowser ? window.innerWidth : null
  );
  function handleWindowSizeChange() {
    setWidth(isBrowser ? window.innerWidth : null);
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return isMobile;
}

export default useIsMobile;
