import { Divider } from '../Divider';
import { SidebarItem } from './sidebarItem';
import { logoutItem, sidebarSections } from './sidebarItem/sideItem';

export default function Sidebar() {
  return (
    <aside className='w-64 h-screen bg-primary text-white fixed flex flex-col'>
      <div className='text-center py-6 text-xl font-bold flex max-w-full justify-center'>
        <img src='/logoArp.png' alt='Ritix' className='w-16' />
      </div>
      <Divider />
      <nav className='flex flex-col text-base flex-1 overflow-y-auto'>
        {sidebarSections.map((section, idx) => (
          <div key={idx} className='my-4 flex flex-col'>
            {section.title && (
              <p className='uppercase text-gray-300 text-xs px-2'>
                {section.title}
              </p>
            )}
            {section.items.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
            <Divider />
          </div>
        ))}
      </nav>
      <div>
        <Divider />
        <SidebarItem {...logoutItem} />
        <div className='w-full justify-center flex pb-1 text-sm'>
          <p>{__APP_VERSION__}</p>
        </div>
      </div>
    </aside>
  );
}
