import { Divider } from '../Divider';
import { MdOutlineSpeed } from 'react-icons/md';
import { IoMdWallet } from 'react-icons/io';
import { MdFeaturedPlayList } from 'react-icons/md';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { MdOutlineRssFeed } from 'react-icons/md';
import { FaUser } from 'react-icons/fa6';
import { FaPowerOff } from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <aside className='w-64 h-screen bg-primary text-white fixed flex flex-col'>
      <div className='text-center py-6 text-xl font-bold flex max-w-full justify-center'>
        <img src='/logoArp.png' alt='Ritix' className='w-16' />
      </div>

      <Divider />

      <nav className='flex flex-col text-base flex-1 overflow-y-auto'>
        <a
          href='/dashboard'
          className='hover:text-gray-200 px-3 py-8 flex items-center gap-2'
        >
          <MdOutlineSpeed className='size-5' />
          <span>Dashboard</span>
        </a>
        <Divider />
        <div className='my-4 flex flex-col'>
          <p className='uppercase text-gray-300 text-xs px-2'>
            Cuide do seu negócio
          </p>
          <a
            href='/license'
            className='hover:text-gray-200 px-3 py-3 flex items-center gap-2'
          >
            <MdFeaturedPlayList className='size-5' />
            <span>Licenças</span>
          </a>
          <a
            href='/wallet'
            className='hover:text-gray-200 px-3 py-3 flex items-center gap-2'
          >
            <IoMdWallet className='size-5' />
            <span>Carteira</span>
          </a>
        </div>
        <Divider />
        <div className='my-4 flex flex-col'>
          <p className='uppercase text-gray-300 text-xs px-2'>
            Invista no seu negócio
          </p>
          <a
            href='/shopping'
            className='hover:text-gray-200 px-3 py-3  flex items-center gap-2'
          >
            <MdShoppingCartCheckout className='size-5' />
            <span>Loja</span>
          </a>
          <a
            href='/news'
            className='hover:text-gray-200 px-3 py-3 flex items-center gap-2'
          >
            <MdOutlineRssFeed className='size-5' />
            <span>Notícias</span>
          </a>
        </div>
        <Divider />
        <div className='my-4 flex flex-col'>
          <a
            href='/developer'
            className='hover:text-gray-200 px-3 py-3 flex items-center gap-2'
          >
            <FaUser className='size-4.5' />
            <span>Developer</span>
          </a>
        </div>
        <Divider />
      </nav>
      <div>
        <Divider />
        <button
          type='button'
          onClick={() => (window.location.href = '/')}
          className='px-3 py-3 w-full cursor-pointer mt-2 text-white hover:text-gray-200 text-left flex items-center gap-2'
        >
          <FaPowerOff className='size-5' />
          <span>Sair</span>
        </button>

        <div className='w-full justify-center flex pb-1 text-sm'>
          <p>v2.0.1/2025</p>
        </div>
      </div>
    </aside>
  );
}
