import { Outlet } from 'react-router-dom';
import { ResponsiveSidebarLayout } from '../components/responsiveSidebarLayout';
import { useGlobal } from '../context/global/useGlobal';
export default function MainLayout() {
  const { appType } = useGlobal();
  return (
    <div className='flex'>
      <ResponsiveSidebarLayout>
        <main
          className={`${
            appType === 'mobile' ? 'mt-16' : 'ml-64'
          } p-6 bg-gray-100 w-full min-h-screen`}
        >
          <Outlet />
        </main>
      </ResponsiveSidebarLayout>
    </div>
  );
}
