import { useEffect, useState } from 'react';
import { GlobalContext } from './globalContext';

const breakpoints = {
  xs: '(max-width: 639px)',
  sm: '(min-width: 640px) and (max-width: 767px)',
  md: '(min-width: 768px) and (max-width: 1023px)',
  lg: '(min-width: 1024px) and (max-width: 1279px)',
  xl: '(min-width: 1280px) and (max-width: 1399px)',
  '2xl': '(min-width: 1400px)',
};
export function GlobalProvider({ children }) {
  const [screen, setScreen] = useState('xs');
  const [menuMobile, setMenuMobile] = useState(false);

  function toogleMenu() {
    setMenuMobile((st) => !st);
  }
  useEffect(() => {
    const mediaQueryLists = Object.keys(breakpoints).map((key) => ({
      breakpoint: key,
      mql: window.matchMedia(breakpoints[key]),
    }));

    const getActiveBreakpoint = () => {
      const activeBreakpoint = mediaQueryLists.find(({ mql }) => mql.matches);
      setScreen(activeBreakpoint ? activeBreakpoint.breakpoint : 'xs');
    };

    getActiveBreakpoint();

    mediaQueryLists.forEach(({ mql }) =>
      mql.addEventListener('change', getActiveBreakpoint)
    );

    return () => {
      mediaQueryLists.forEach(({ mql }) =>
        mql.removeEventListener('change', getActiveBreakpoint)
      );
    };
  }, []);
  function getAppType() {
    const mobileSizes = ['xs', 'sm'];
    const tabletSizes = ['md'];

    if (mobileSizes.includes(screen)) {
      return 'mobile';
    }
    if (tabletSizes.includes(screen)) {
      return 'tablet';
    }
    return 'desktop';
  }
  const appType = getAppType();

  return (
    <GlobalContext.Provider value={{ toogleMenu, menuMobile, appType, screen }}>
      {children}
    </GlobalContext.Provider>
  );
}
