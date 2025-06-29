"use client";

import React from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { RiNotification3Line, RiChat1Line, RiGiftLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';

import styles from '../styles/Header.module.css';

const Header = () => {
    const userAvatarSrc = "/user-avatar.png";
    const userName = "Samantha";

    return (
        <header className={styles.headerContainer}>

            <div className={styles.headerSearch}>
                <input type="text" placeholder="Search here..." className={styles.headerSearchInput} />
                <FiSearch className={styles.headerSearchIcon} />
            </div>

            {/* Right Section: Icons and User Info */}
            <div className={styles.headerRightSection}>
                <div className={styles.iconStack}>
                    {/* Notification Icon */}
                    <div className={styles.iconWrapper}>
                        <RiNotification3Line className={styles.headerIcon} />
                        <span className={styles.badgeNotification}>21</span>
                    </div>
                    {/* Chat Icon */}
                    <div className={styles.iconWrapper}>
                        <RiChat1Line className={styles.headerIcon} />
                        <span className={styles.badgeChat}>53</span>
                    </div>
                    {/* Shopping Cart Icon */}
                    <div className={styles.iconWrapper}>
                        <MdOutlineShoppingCart className={styles.headerIcon} />
                        <span className={styles.badgeCart}>15</span>
                    </div>
                    {/* Settings Icon */}
                    <div className={styles.iconWrapper}>
                        <IoSettingsOutline className={styles.headerIcon} />
                        <span className={styles.badgeSettings}>19</span>
                    </div>
                </div>

                <div className={styles.userInfo}>
                    <p className={styles.userName}>Hello, {userName}</p>
                    <Image
                        src={userAvatarSrc}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className={styles.userAvatar}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;