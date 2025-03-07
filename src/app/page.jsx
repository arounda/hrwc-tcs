import Contact from '@/components/Common/Contact';
import Mission from '@/components/Common/Mission';
import Connect from '@/components/Pages/Homepage/Connect';
import Hero from '@/components/Pages/Homepage/Hero';
import TrustedPartner from '@/components/Pages/Homepage/TrustedPartner';
import HeaderFooterView from '@/components/Views/HeaderFooterView';

export default function Home() {
  return (
    <div>
      <HeaderFooterView>
        <Hero />

        <TrustedPartner />

        <Connect />

        <Mission />

        <Contact />
      </HeaderFooterView>
    </div>
  );
};
