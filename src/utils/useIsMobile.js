import React from 'react';

function useIsMobile() {
  const [width, setWidth] = React.useState(window && window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window && window.innerWidth);
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
