"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

const NavLink = ({ href, children, className, activeClassName }: NavLinkProps) => {
    const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link 
      href={href} 
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  )
}

export default NavLink