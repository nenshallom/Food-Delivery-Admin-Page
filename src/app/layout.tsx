// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header'; // Ensure Header is imported

// Import the new layout styles
import layoutStyles from './layout.module.css'; // NEW import for layout styles

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin Dashboard',
  description: 'A comprehensive admin dashboard built with Next.js and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Added layoutStyles.dashboardLayoutWrapper to the main flex container */}
        <div className={layoutStyles.dashboardLayoutWrapper}>
          <Sidebar />
          <div className={layoutStyles.mainContentArea}> {/* Applied class to main content area */}
            <Header />
            <MainContent>{children}</MainContent>
          </div>
        </div>
      </body>
    </html>
  );
}