// src/app/page.tsx
import React from 'react';

import StatsCard from './components/StatsCard/StatsCard';
import PieChart from './components/PieChart/PieChart';
import ChartOrder from './components/ChartOrder/ChartOrder';
import TotalRevenueChart from './components/TotalRevenueChart/TotalRevenueChart';
import CustomerMapChart from './components/CustomerMapChart/CustomerMapChart';
import CustomerReview from './components/CustomerReview/CustomerReview';

// Import statsData from the new data file
import { statsData } from './data/statsData';

import styles from './page.module.css';

const Page = () => {
  return (
    <div className={styles.dashboardLayout}>
      {/* Assuming Sidebar and MainContent are managed by layout.tsx and you only return inner content */}
      <div className={styles.dashboardPageContent}>

        {/* Updated dashboardHeaderArea to match the design, including filter period */}
        <div className={styles.dashboardHeaderArea}>
          <h2 className={styles.dashboardTitle}>Dashboard</h2>
          <p className={styles.dashboardWelcomeMessage}>Hi, Samantha. Welcome back to Sedap Admin!</p>

          <div className={styles.filterPeriodContainer}> {/* Renamed class */}
            <button className={styles.filterPeriodButton}> {/* Renamed class */}
              <span className={styles.filterPeriodIcon}>🗓️</span> {/* Renamed class */}
              <span className={styles.filterPeriodText}>Filter Period:</span> {/* NEW: Added span for 'Filter Period:' text */}
              <span className={styles.filterPeriodDateRange}>17 April 2020 - 21 May 2020</span> {/* NEW: Added span for date range */}
              <span className={styles.filterPeriodDropdownArrow}>⬇️</span> {/* Renamed class */}
            </button>
          </div>
        </div>

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

        <div className={styles.chartsGrid}>
          <PieChart />
          <ChartOrder />
        </div>

        <div className={styles.secondaryChartsGrid}>
          <TotalRevenueChart />
          <CustomerMapChart />
        </div>

        <CustomerReview />

      </div>
    </div>
  );
};

export default Page;