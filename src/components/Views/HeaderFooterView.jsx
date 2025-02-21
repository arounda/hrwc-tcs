import Footer from '@/components/Common/Footer/Footer';
import Header from '@/components/Common/Header/Header';

const HeaderFooterView = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
};

export default HeaderFooterView;
