import { FaTimes } from 'react-icons/fa';
import { FaBars, FaPowerOff, FaUser } from 'react-icons/fa6';
import { IoMdWallet } from 'react-icons/io';
import {
  MdFeaturedPlayList,
  MdOutlineRssFeed,
  MdOutlineSpeed,
  MdShoppingCartCheckout,
} from 'react-icons/md';
import { useGlobal } from '../../Hooks/useGlobal';
import { Divider } from '../Divider';

const navItems = [
  {
    href: '/dashboard',
    icon: <MdOutlineSpeed className='size-5' />,
    label: 'Dashboard',
  },
  {
    href: '/license',
    icon: <MdFeaturedPlayList className='size-5' />,
    label: 'Licenças',
  },
  {
    href: '/wallet',
    icon: <IoMdWallet className='size-5' />,
    label: 'Carteira',
  },
  {
    href: '/shopping',
    icon: <MdShoppingCartCheckout className='size-5' />,
    label: 'Loja',
  },
  {
    href: '/news',
    icon: <MdOutlineRssFeed className='size-5' />,
    label: 'Notícias',
  },
  {
    href: '/developer',
    icon: <FaUser className='size-4.5' />,
    label: 'Developer',
  },
];

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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='hover:text-gray-200 px-2 py-3 flex items-center gap-2'
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div>
          <div>
            <Divider />
            <button
              type='button'
              onClick={() => (window.location.href = '/')}
              className='px-3 py-3 w-full cursor-pointer text-left text-white hover:text-gray-200 flex items-center gap-2'
            >
              <FaPowerOff className='size-5' />
              <span>Sair</span>
            </button>
          </div>
          <div className='text-sm text-center mt-4'>v2.0.1/2025</div>
        </div>
      </div>
    </>
  );
}
