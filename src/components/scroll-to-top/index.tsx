import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTopOnMount() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on component mount
  }, [pathname]);
  return null;
}
