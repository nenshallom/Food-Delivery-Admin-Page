// src/components/Sidebar/Sidebar.tsx

"use client"; // Add this line because we're using hooks like usePathname

import React from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import Image from 'next/image'; // Import Image for app icon and user avatar
import styles from '../styles/Sidebar.module.css';
import { RiDashboardLine, RiCustomerService2Line, RiWalletLine, RiCalendarLine, RiChat1Line } from 'react-icons/ri';
import { MdOutlineFastfood, MdAnalytics, MdOutlineReviews, MdOutlineShoppingCart } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi'; // Import search icon

interface NavItem {
    id: number;
    name: string;
    path: string;
    icon: React.ElementType; // Icon component type
}

// each element in the array must conform to the NavItem interface
const navItems: NavItem[] = [
    { id: 1, name: 'Dashboard', path: '/', icon: RiDashboardLine },
    { id: 2, name: 'Order List', path: '/order-list', icon: MdOutlineShoppingCart },
    { id: 3, name: 'Order Detail', path: '/order-detail', icon: RiCustomerService2Line },
    { id: 4, name: 'Customer', path: '/customer', icon: RiCustomerService2Line },
    { id: 5, name: 'Analytics', path: '/analytics', icon: MdAnalytics },
    { id: 6, name: 'Reviews', path: '/reviews', icon: MdOutlineReviews },
    { id: 7, name: 'Foods', path: '/foods', icon: MdOutlineFastfood },
    { id: 8, name: 'Food Detail', path: '/food-detail', icon: MdOutlineFastfood }, // Changed icon to match food theme
    { id: 9, name: 'Customer Detail', path: '/customer-detail', icon: RiCustomerService2Line },
    { id: 10, name: 'Calendar', path: '/calendar', icon: RiCalendarLine },
    { id: 11, name: 'Chat', path: '/chat', icon: RiChat1Line },
    { id: 12, name: 'Wallet', path: '/wallet', icon: RiWalletLine },
];

const Sidebar = () => {
    const pathname = usePathname(); // Get current path

    return (
        <div className={styles.sideBar}>
            {/* logo/brand Section as per figma design */}
            <div className={styles.logoSection}>
                <h1>Sedap.</h1>
                <p className={styles.modernDashboard}>Modern Admin Dashboard</p>
            </div>

            

            {/* Main Navigation Section */}
            <nav className={styles.nav}>
                <ul className={styles.UlnavList}>
                    {/* Map through navItems to create navigation links */}
                    {navItems.map((item: NavItem) => (
                        <li key={item.id} className={`${styles.navItem} ${pathname === item.path ? styles.activeNavItem : ''}`}>
                            <a href={item.path} className={styles.navLink}> {/* Changed to navLink for consistency with CSS */}
                                <item.icon className={styles.navIcon} />
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Download App Section */}
            <div className={styles.downloadAppSection}>
                <p className={styles.downloadAppTitle}>Download Our App</p>
                <div className={styles.downloadAppContent}>
                    {/* Placeholder image for the app icon/design */}
                    <Image
                        src="/images/app-icon-placeholder.png" // Replace with your actual app icon path
                        alt="Download App"
                        width={60} // Adjust size as per your design
                        height={60} // Adjust size as per your design
                        className={styles.appImagePlaceholder}
                    />
                    {/* Placeholder button */}
                    <button className={styles.downloadButton}>Download Now</button>
                </div>
            </div>

            {/* REMOVED: Admin Info Section - not in target design */}
            {/* <div className={styles.admininfoSection}>
                <p>Sedap Restaurant Admin Dashboard</p>
                <p>Welcome back.</p>
            </div> */}
        </div>
    );
};

export default Sidebar;