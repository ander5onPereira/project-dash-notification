import { useGlobal } from '../../Hooks/useGlobal';
import Sidebar from './Sidebar';
import SideBarMobile from './SideBarMobile';

export function WrapperSideBar({ children }) {
  const { appType } = useGlobal();
  return (
    <>
      {appType === 'mobile' ? <SideBarMobile /> : <Sidebar />}
      {children}
    </>
  );
}
