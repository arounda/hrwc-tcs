import Connect from '@/components/Pages/Homepage/Connect/Connect';
import Hero from '@/components/Pages/Homepage/Hero/Hero';
import News from '@/components/Pages/Homepage/News/News';
import Solutions from '@/components/Pages/Homepage/Solutions/Solutions';
import Testimonials from '@/components/Pages/Homepage/Testimonials/Testimonials';
import Tour from '@/components/Pages/Homepage/Tour/Tour';
import TrustedPartner from '@/components/Pages/Homepage/TrustedPartner/TrustedPartner';
import Contact from '@/components/Common/Contact/Contact';
import Mission from '@/components/Common/Mission/Mission';
import HeaderFooterView from '@/components/Views/HeaderFooterView';

export default function Home() {
  return (
    <div>
      <HeaderFooterView>
        <Hero />

        <TrustedPartner />

        <Solutions />

        <Tour />

        <Testimonials />

        <Connect />

        <News />

        <Mission />

        <Contact />
      </HeaderFooterView>
    </div>
  );
};
