import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SpinningWheel from '@/components/SpinningWheel';
import PublicSafetySection from '@/components/PublicSafetySection';
import DistrictHeroSection from '@/components/DistrictHeroSection';
import DistrictFeaturesSection from '@/components/DistrictFeaturesSection';
import QuoteSlider from '@/components/QuoteSlider';
import VoteReadySection from '@/components/VoteReadySection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>T.R. Ward for Sullivan County Commission District 8 | 2026 Election</title>
        <meta name="description" content="Elect T.R. Ward for Sullivan County Commission District 8 in 2026. Real change, real results for Tennessee families. Learn about our vision for public safety, infrastructure, and community growth." />
        <meta name="keywords" content="T.R. Ward, Sullivan County Commission, District 8, Tennessee election 2026, Sullivan County TN, local government, county commissioner" />
        
        {/* Open Graph */}
        <meta property="og:title" content="T.R. Ward for Sullivan County Commission District 8" />
        <meta property="og:description" content="Moving Sullivan County Forward - Starting in District 8. Real change, real results for Tennessee families." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wardforsullivan.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="T.R. Ward for District 8" />
        <meta name="twitter:description" content="Real change, real results for Sullivan County" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://wardforsullivan.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <SpinningWheel />
          <PublicSafetySection />
          <DistrictHeroSection />
          <DistrictFeaturesSection />
          <QuoteSlider />
          <VoteReadySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
