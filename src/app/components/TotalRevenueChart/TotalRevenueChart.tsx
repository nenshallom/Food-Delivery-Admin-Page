
import React from 'react';
import styles from '../styles/TotalRevenueChart.module.css';

const TotalRevenueChart: React.FC = () => {
  return (
    <div className={styles.totalRevenueContainer}>
      <div className={styles.chartHeader}>
        <h3>Total Revenue</h3>
        <div className={styles.chartControls}>
          <div className={styles.legendDot} style={{ backgroundColor: '#007bff' }}></div>
          <span className={styles.legendText}>2020</span>
          <div className={styles.legendDot} style={{ backgroundColor: '#dc3545' }}></div>
          <span className={styles.legendText}>2021</span>
        </div>
      </div>
      <div className={styles.chartBody}>
        {/* Placeholder for the actual Total Revenue Chart  */}
        <div className={styles.placeholderChartArea}></div>
        <p className={styles.placeholderText}>Line chart data will go here.</p>
        <div className={styles.xAxisLabels}>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sept</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Des</span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenueChart;