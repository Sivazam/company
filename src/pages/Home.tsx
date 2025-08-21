import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import InteractiveServices from '../components/InteractiveServices';
import InteractiveShowcase from '../components/InteractiveShowcase';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Digital Solutions - Web Development, Mobile Apps, Digital Marketing & Design</title>
        <meta name="description" content="Expert web development, mobile app development, digital marketing, and graphic design services that drive results and elevate your brand." />
      </Helmet>

      <main>
        <HeroSection />
        <InteractiveServices />
        <InteractiveShowcase />
      </main>
    </>
  );
}