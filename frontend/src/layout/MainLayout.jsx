import { Outlet } from 'react-router-dom';
import { useGlobal } from '../Hooks/useGlobal';
import { WrapperSideBar } from '../components/sideMenu';
export default function MainLayout() {
  const { appType, screen } = useGlobal();
  return (
    <div className='flex'>
      <WrapperSideBar>
        <main
          className={`${
            appType === 'mobile' ? 'mt-16' : 'ml-64'
          } p-6 bg-gray-100 w-full min-h-screen`}
        >
          <Outlet />
        </main>
      </WrapperSideBar>
    </div>
  );
}
