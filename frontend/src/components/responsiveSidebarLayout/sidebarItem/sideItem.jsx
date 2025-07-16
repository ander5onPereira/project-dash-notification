import { MdOutlineSpeed } from 'react-icons/md';
import { IoMdWallet } from 'react-icons/io';
import { MdFeaturedPlayList } from 'react-icons/md';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { MdOutlineRssFeed } from 'react-icons/md';
import { FaUser } from 'react-icons/fa6';
import { FaPowerOff } from 'react-icons/fa6';

export const sidebarSections = [
  {
    title: null,
    items: [{ label: 'Dashboard', href: '/dashboard', icon: MdOutlineSpeed }],
  },
  {
    title: 'Cuide do seu negócio',
    items: [
      { label: 'Licenças', href: '/license', icon: MdFeaturedPlayList },
      { label: 'Carteira', href: '/wallet', icon: IoMdWallet },
    ],
  },
  {
    title: 'Invista no seu negócio',
    items: [
      { label: 'Loja', href: '/shopping', icon: MdShoppingCartCheckout },
      { label: 'Notícias', href: '/news', icon: MdOutlineRssFeed },
    ],
  },
  {
    title: null,
    items: [{ label: 'Developer', href: '/developer', icon: FaUser }],
  },
];
export const logoutItem = {
  label: 'Sair',
  href: '/',
  icon: FaPowerOff,
};