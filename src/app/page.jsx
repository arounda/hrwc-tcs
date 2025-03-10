import Contact from '@/components/Common/Contact';
import Connect from '@/components/Pages/Homepage/Connect';
import Hero from '@/components/Pages/Homepage/Hero';
import Mission from '@/components/Pages/Homepage/Mission';
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
