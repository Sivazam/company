import { useLocation } from 'react-router-dom';
import ModernNavigation from './ModernNavigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import MetaTags from './MetaTags';
import { useTheme } from '../contexts/ThemeContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { theme } = useTheme();

  // Don't show navigation and footer on SEO dashboard
  const isSEODashboard = location.pathname === '/seo-dashboard';

  return (
    <div className={`min-h-screen ${
      theme === 'light' ? 'bg-white' : 'bg-slate-900'
    }`}>
      <MetaTags />
      {!isSEODashboard && <ModernNavigation />}
      <main>{children}</main>
      {!isSEODashboard && <Footer />}
      {!isSEODashboard && <ScrollToTop />}
    </div>
  );
}