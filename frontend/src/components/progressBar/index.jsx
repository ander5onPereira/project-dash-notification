import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './nprogress.css';

export function ProgressBar() {
  const location = useLocation();
  NProgress.configure({
    showSpinner: false,
    speed: 400,
    minimum: 0.2,
  });
  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 1000);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location.pathname]);

  return null;
}
