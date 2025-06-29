
import React from 'react';

import StatsCard from './components/StatsCard/StatsCard';
import PieChart from './components/PieChart/PieChart';
import ChartOrder from './components/ChartOrder/ChartOrder';
import TotalRevenueChart from './components/TotalRevenueChart/TotalRevenueChart';
import CustomerMapChart from './components/CustomerMapChart/CustomerMapChart';
import CustomerReview from './components/CustomerReview/CustomerReview';
import { statsData } from './data/statsData';

import styles from './page.module.css';

const Page = () => {
  return (
    <div className={styles.dashboardLayout}>
      {/* Main dashboard content area (Sidebar & Header handled by layout.tsx) */}
      <div className={styles.dashboardPageContent}>

        {/* Dashboard header with title, welcome message, and filter button */}
        <div className={styles.dashboardHeaderArea}>
          <div>
            <h2 className={styles.dashboardTitle}>Dashboard</h2>
            <p className={styles.dashboardWelcomeMessage}>Hi, Samantha. Welcome back to Sedap Admin!</p>
          </div>

          <div className={styles.filterPeriodContainer}>
            <button className={styles.filterPeriodButton}>
              <span className={styles.filterPeriodIcon}>🗓️</span>
              <span className={styles.filterPeriodText}>Filter Period:</span>
              <span className={styles.filterPeriodDateRange}>17 April 2020 - 21 May 2020</span>
              <span className={styles.filterPeriodDropdownArrow}>⬇️</span>
            </button>
          </div>
        </div>

        {/* Stats overview cards */}
        <div className={styles.statsCardsGrid}>
          {statsData.map((stat) => (
            <StatsCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              percentage={stat.percentage}
              trend={stat.trend as 'up' | 'down'}
              iconType={stat.iconType as 'orders' | 'delivered' | 'canceled' | 'revenue'}
            />
          ))}
        </div>

        {/* charts grid */}
        <div className={styles.chartsGrid}>
          <PieChart />
          <ChartOrder />
        </div>

        {/* Secondary charts grid */}
        <div className={styles.secondaryChartsGrid}>
          <TotalRevenueChart />
          <CustomerMapChart />
        </div>

        {/* Customer review section */}
        <CustomerReview />
        
      </div>
    </div>
  );
};

export default Page;
