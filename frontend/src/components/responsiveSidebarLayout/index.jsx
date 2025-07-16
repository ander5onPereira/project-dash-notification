import { useGlobal } from '../../context/global/useGlobal';
import Sidebar from './Sidebar';
import SideBarMobile from './SideBarMobile';

export function ResponsiveSidebarLayout({ children }) {
  const { isMobile } = useGlobal();
  return (
    <div className='flex w-full'>
      {isMobile ? <SideBarMobile /> : <Sidebar />}
      {children}
    </div>
  );
}
