import Contact from '@/components/Common/Contact';
import Connect from '@/components/Pages/Homepage/Connect';
import Hero from '@/components/Pages/Homepage/Hero';
import Hiw from '@/components/Pages/Homepage/Hiw';
import Mission from '@/components/Pages/Homepage/Mission';
import TCSolutions from '@/components/Pages/Homepage/TCSolutions';
import TrustedPartner from '@/components/Pages/Homepage/TrustedPartner';
import HeaderFooterView from '@/components/Views/HeaderFooterView';

export default function Home() {
  return (
    <div>
      <HeaderFooterView>
        <Hero />

        <TrustedPartner />

        <TCSolutions />

        <Hiw />

        <Connect />

        <Mission />

        <Contact />
      </HeaderFooterView>
    </div>
  );
};
