export function SidebarItem({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      className='hover:text-gray-200 px-3 py-3 flex items-center gap-2'
    >
      <Icon className='size-5' />
      <span>{label}</span>
    </a>
  )
}