import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
    children: React.ReactNode
}

const ScrollToTop = ({children}: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname ===('/')) {
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
