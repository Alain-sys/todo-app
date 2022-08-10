import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mediaWatcher = window.matchMedia(query);
    if (mediaWatcher.matches !== matches) {
      setMatches(mediaWatcher.matches);
    }
    const updateMatches = () => {
      setMatches(mediaWatcher.matches);
    };
    mediaWatcher.addEventListener('change', updateMatches);
    return () => {
      mediaWatcher.removeEventListener('change', updateMatches);
    };
  }, [matches, query]);
  return matches;
};

export default useMediaQuery;
