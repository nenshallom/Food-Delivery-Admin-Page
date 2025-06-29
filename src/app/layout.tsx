
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import layoutStyles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin Dashboard',
  description: 'A comprehensive admin dashboard built with Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Dashboard main layout: Sidebar and main content area */}
        <div className={layoutStyles.dashboardLayoutWrapper}>
          <Sidebar />
          
          <div className={layoutStyles.mainContentArea}>
            <Header />
            {/* MainContent wraps the dynamic page content */}
            <MainContent>{children}</MainContent>
          </div>
        </div>
      </body>
    </html>
  );
}
