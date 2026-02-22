import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
<<<<<<< HEAD
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
=======

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
>>>>>>> ee7b7c1a99439a7941dffa53c57161fecb046085
  return (
    <>
      <Header />
      <main className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PagesLayout;
