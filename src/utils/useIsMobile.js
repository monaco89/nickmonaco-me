import React from 'react';

function useIsMobile() {
  // define dimension variables for use in hook
  let height;
  let width;
  // Check for the window element.
  // Needed for server size rendering of Gatsby else use of window.innerHeight/Width will cause build failures.
  if (typeof window !== `undefined`) {
    height = window.innerHeight;
    width = window.innerWidth;
  }
  // See default state of dimensions
  const [dimensions, setDimensions] = React.useState({
    windowHeight: height,
    windowWidth: width,
  });

  function handleWindowSizeChange() {
    setDimensions({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = dimensions.width <= 768;

  return isMobile;
}

export default useIsMobile;
