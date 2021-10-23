import React from 'react';

function useIsMobile() {
  const [width, setWidth] = React.useState(
    typeof window !== undefined ? window.innerWidth : null
  );

  function handleWindowSizeChange() {
    setWidth(typeof window !== undefined ? window.innerWidth : null);
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
