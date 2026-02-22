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
<<<<<<< HEAD
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors hover:text-orange-500 ${isActive ? "text-orange-500" : "text-gray-600"
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className='hidden md:block'>
            {!session ? <AuthButtons /> : <UserMenu name={session.user.name} email={session.user.email} />}
=======
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
>>>>>>> ee7b7c1a99439a7941dffa53c57161fecb046085
          </div>

          <MobileMenu
            navItems={navItems}
            authButtons={<AuthButtons isMobile />}
           
            session={session}
          />
        </div>
      </nav>
<<<<<<< HEAD

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className='fixed inset-0 bg-gray-600/50 backdrop-blur-sm'
          onClick={toggleMenu}
          aria-hidden='true'
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
              <Link
                key={href}
                href={href}
                className={`text-lg font-semibold py-2 transition-colors ${pathname === href ? "text-orange-500" : "text-gray-800 hover:text-orange-500"}`}
              >
                {label}
              </Link>
            ))}

            <hr className='my-4 border-gray-100' />

            {!session ? <AuthButtons isMobile /> : <UserMenu name={session.user.name} email={session.user.email} />}
          </div>
        </div>
      </div>
=======
>>>>>>> ee7b7c1a99439a7941dffa53c57161fecb046085
    </header>
  );
};

export default Header;
