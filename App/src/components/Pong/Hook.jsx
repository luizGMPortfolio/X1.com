import { useState, useEffect } from 'react';

function useElementDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const handleResize = () => {
        const rect = ref.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      };

      // Initial call to set dimensions
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Clean up event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [ref]);

  return dimensions;
}

export default useElementDimensions;
