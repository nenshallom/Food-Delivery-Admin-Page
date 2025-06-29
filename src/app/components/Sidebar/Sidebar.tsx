// we're using hooks like usePathname
"use client"; 

import React from 'react';
import { usePathname } from 'next/navigation'; 
import Image from 'next/image'; 
import styles from '../styles/Sidebar.module.css';
import { RiDashboardLine, RiCustomerService2Line, RiWalletLine, RiCalendarLine, RiChat1Line } from 'react-icons/ri';
import { MdOutlineFastfood, MdAnalytics, MdOutlineReviews, MdOutlineShoppingCart } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi'; // Import search icon

interface NavItem {
    id: number;
    name: string;
    path: string;
    icon: React.ElementType; 
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
    const pathname = usePathname(); 

    return (
        <div className={styles.sideBar}>
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
                            <a href={item.path} className={styles.navLink}> 
                                <item.icon className={styles.navIcon} />
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    );
};

export default Sidebar;