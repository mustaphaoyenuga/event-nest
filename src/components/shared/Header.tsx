import Link from "next/link";
import Logo from "../Logo";
import UserMenu from "../UserMenu";
import { auth } from "@/lib/auth";
import MobileMenu from "../MobileMenu";
import NavLink from "../NavLink";
import { headers } from "next/headers";

const navItems = [
  { label: "Home", href: "/" },
  { label: "All Events", href: "/events" },
  { label: "Create Event", href: "/events/new" },
];

const AuthButtons = ({ isMobile }: { isMobile?: boolean }) => (
  <div
    className={`flex ${isMobile ? "flex-col space-y-3" : "items-center space-x-4"}`}
  >
    <Link
      href='/sign-in'
      className={`text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 ${isMobile ? "w-full text-center py-3 bg-gray-50 rounded-lg shadow-sm" : ""}`}
    >
      Log in
    </Link>
    <Link
      href='/sign-up'
      className={`text-white bg-orange-500 hover:bg-orange-600 text-center font-medium rounded-lg text-sm px-4 py-2 shadow-sm ${isMobile ? "w-full py-3" : ""}`}
    >
      Get started
    </Link>
  </div>
);

// type Session = typeof auth.$Infer.Session;
const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-none'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between items-center'>
          <Logo />

          <ul className='hidden md:flex md:items-center md:space-x-6'>
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 text-gray-600`}
                  activeClassName='text-orange-500'
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className='hidden md:block'>
            {!session ? <AuthButtons /> : <UserMenu user={session.user} />}
          </div>

          <MobileMenu
            navItems={navItems}
            authButtons={<AuthButtons isMobile />}
           
            session={session}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
