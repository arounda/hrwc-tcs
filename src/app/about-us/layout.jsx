import HeaderFooterView from '@/components/Views/HeaderFooterView';

export const metadata = {
  title: "About us | HRWORKCYCLES",
};

const AboutLayout = ({ children }) => {
  return (
    <HeaderFooterView>
      {children}
    </HeaderFooterView>
  )
};

export default AboutLayout;
