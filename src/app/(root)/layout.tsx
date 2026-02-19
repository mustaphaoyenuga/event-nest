import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("Session:", session?.user.name);
  
  return (
    <>
      <Header session={session} />
      <main className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PagesLayout;
