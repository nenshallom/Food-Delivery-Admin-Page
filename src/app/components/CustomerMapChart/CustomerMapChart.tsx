// src/components/CustomerMapChart/CustomerMapChart.tsx

import React from 'react';
import styles from '../styles/CustomerMapChart.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs'; // Three dots icon
import { MdKeyboardArrowDown } from 'react-icons/md'; // Dropdown arrow icon

const CustomerMapChart: React.FC = () => {
  return (
    <div className={styles.customerMapContainer}>
      <div className={styles.chartHeader}>
        <h3>Customer Map</h3>
        <div className={styles.chartControls}>
          <button className={styles.weeklyDropdown}>
            Weekly <MdKeyboardArrowDown className={styles.dropdownIcon} />
          </button>
          <BsThreeDotsVertical className={styles.moreOptionsIcon} />
        </div>
      </div>
      <div className={styles.chartBody}>
        {/* Placeholder for the actual Customer Map (bar chart) */}
        <div className={styles.placeholderChartArea}></div>
        <p className={styles.placeholderText}>Bar chart data will go here.</p>
        <div className={styles.xAxisLabels}>
            <span>Sun</span>
            <span>Sun</span>
            <span>Sun</span>
            <span>Sun</span>
            <span>Sun</span>
            <span>Sun</span>
            <span>Sun</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerMapChart;