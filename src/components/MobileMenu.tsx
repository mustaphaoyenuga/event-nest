"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavLink from "./NavLink";

interface MobileMenuProps {
  navItems: { label: string; href: string }[];
  authButtons: React.ReactNode;
  session: any;
}

export default function MobileMenu({
  navItems,
  authButtons,
  session,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className='md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100'
        aria-expanded={isOpen}
      >
        {isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
      </button>

      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className='fixed inset-0 bg-gray-600/50 backdrop-blur-sm'
          onClick={toggleMenu}
        />

        <div className='fixed right-0 top-0 h-full w-full max-w-sm bg-white p-6 shadow-xl flex flex-col'>
          <div className='flex items-center justify-between mb-8'>
            <Logo />
            <button
              onClick={toggleMenu}
              className='p-2 text-gray-500 hover:bg-gray-100 rounded-full'
            >
              <X className='size-6' />
            </button>
          </div>

          <div className='flex flex-col space-y-4'>
            {navItems.map(({ label, href }) => (
              <NavLink
                key={href}
                href={href}
                className='text-lg font-semibold py-2 transition-colors text-gray-800 hover:text-orange-500'
                activeClassName='text-orange-500'
              >
                {label}
              </NavLink>
            ))}
            <hr className='my-4 border-gray-100' />
            {authButtons}
          </div>
        </div>
      </div>
    </>
  );
}
