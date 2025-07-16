import { useContext, useEffect } from 'react';
import GlobalContext from '.';

export function useGlobal() {
  const { toogleMenu, menuMobile, appType, screen } = useContext(GlobalContext);
  useEffect(() => {
    document.body.style.overflow = menuMobile ? 'hidden' : 'auto';
  }, [menuMobile]);
  return {
    toogleMenu,
    menuMobile,
    appType,
    screen,
    isMobile: appType === 'mobile',
  };
}
