import { signOut } from "@/lib/actions/auth-actions";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className='relative'>
      <button
        ref={buttonRef}
        type='button'
        className='bg-gray-400 rounded-full p-1 cursor-pointer focus:ring-2 focus:ring-gray-400 focus:outline-none hover:bg-gray-500 transition-colors'
        onClick={toggleMenu}
      >
        <span className='sr-only'>Open user menu</span>
        <span className='w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white'>
          MA
        </span>
      </button>
      {/* Dropdown menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='absolute right-0 top-6 bg-white shadow-sm z-50 text-base rounded-lg my-4 list-none divide-y divide-gray-100 border border-gray-200 min-w-48'
        >
          <div className='px-4 py-3'>
            <span className='block text-sm text-gray-900'>Musty Doe</span>
            <span className='block text-sm text-gray-500 truncate'>
              musty@gmail.com
            </span>
          </div>
          <ul className='py-2' role='menu' aria-labelledby='user-menu-button'>
            {menuItems.map((menuItem) => (
              <li key={menuItem.href} role='none'>
                <a
                  href={menuItem.href}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
            <li role='none'>
              <button
                type='button'
                onClick={handleLogout}
                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
