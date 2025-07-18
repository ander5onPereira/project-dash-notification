import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { Divider } from '../Divider';
import { SidebarItem } from './sidebarItem';
import { logoutItem, sidebarSections } from './sidebarItem/sideItem';
import { useGlobal } from '../../context/global/useGlobal';

export default function SideBarMobile() {
  const { menuMobile, toogleMenu } = useGlobal();
  return (
    <>
      <div className='md:hidden fixed top-0 left-0 right-0 bg-primary text-white flex items-center justify-between px-4 py-3 z-50 shadow-md'>
        <div className='flex items-center gap-2'>
          <img src='/logoArp.png' alt='Ritix' className='w-10' />
          <span className='font-bold text-lg'>ARPDev</span>
        </div>
        <button
          onClick={() => toogleMenu()}
          className='text-white text-xl cursor-pointer'
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-primary text-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
          menuMobile ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div>
          <div className='flex items-center justify-between px-4 py-4 max-h-fit'>
            <img src='/logoArp.png' alt='Ritix' className='w-10' />
            <button
              onClick={() => toogleMenu()}
              className='text-white text-xl cursor-pointer'
            >
              <FaTimes />
            </button>
          </div>
          <Divider />
        </div>
        <div className='flex items-start flex-1 w-full'>
          <nav className='flex flex-col text-base px-2 items-start w-full'>
            {sidebarSections.map((section, idx) => (
              <div key={idx}>
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                  />
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div>
          <div>
            <Divider />
            <SidebarItem {...logoutItem} />
          </div>
          <div className='text-sm text-center mt-4'>{__APP_VERSION__}</div>
        </div>
      </div>
    </>
  );
}
