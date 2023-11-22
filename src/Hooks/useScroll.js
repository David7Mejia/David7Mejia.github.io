/*
? Hook that returns height and width dimensions of window
? for use of styles or events depending on device window height OR width.
 */

import { useState, useEffect } from "react";

// Get width and height dimensions from window
const getScroll = () => {
  // const { innerWidth: width, innerHeight: height } = window;
  // return {
  //   width,
  //   height,
  // };

  return window.scrollY;
};

// setState to function calling width and height
const useScroll = () => {
  const [haveScrolled, setHaveScrolled] = useState(getScroll());

  // useEffect to update width and height dimensions responsively
  useEffect(() => {
    // Update window dimensions
    const handleScroll = () => {
      setHaveScrolled(getScroll());
    };

    // Add event listener when resizing window to update styles
    // window.addEventListener('resize', handleScroll);

    // Cleanup event listener after resizing window
    // return () => window.removeEventListener('resize', handleResize);

    // const scrollListener = () => {
    //   setHaveScrolled(document.documentElement.scrollTop !== 0);
    // };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return haveScrolled;
};

export default useScroll;
