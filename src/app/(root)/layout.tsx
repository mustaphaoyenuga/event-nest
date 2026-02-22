import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
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
