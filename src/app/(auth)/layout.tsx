import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import Logo from "@/components/Logo";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
   const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect('/');
  }
  return (
    <div className='w-full min-h-screen'>
      <section className='bg-gray-100'>
        <div className='flex flex-col lg:flex-row h-screen'>
          <div className='flex-1 flex items-center justify-center h-full'>
            <div className='sm:max-w-lg space-y-4'>
              <Logo />
              <h1 className='text-4xl mt-10 lg:text-5xl font-bold tracking-wide'>
                Find all events <br /> around you
              </h1>
              <p className='text-sm lg:text-base text-slate-800 '>
                Discover and book various events around you all from the comfort
                of your home. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ex, dolorem
              </p>
            </div>
          </div>
          {children}
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
