// src/components/PieChart/PieChart.tsx
import React from 'react';
import styles from '../styles/PieChart.module.css'; // Import styles for the PieChart
import { MdMoreVert } from 'react-icons/md'; // For the three-dot menu icon

const PieChart: React.FC = () => {
  return (
    <div className={styles.pieChartContainer}>
      <div className={styles.chartHeader}>
        <h3 className={styles.chartTitle}>Pie Chart</h3>
        <div className={styles.headerControls}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.chartCheckbox} defaultChecked /> Chart
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.chartCheckbox} defaultChecked /> Show Value
          </label>
          <MdMoreVert className={styles.moreOptionsIcon} />
        </div>
      </div>

      <div className={styles.chartsWrapper}>
        {/* Individual Pie Chart 1: Total Order */}
        <div className={styles.singleChart}>
          <div className={styles.donutChart}>
            {/* These divs act as a visual representation of the donut slices using CSS */}
            <div className={styles.slice1}></div>
            <div className={styles.slice2}></div>
            <span className={styles.percentage}>81%</span>
          </div>
          <p className={styles.chartLabel}>Total Order</p>
        </div>

        {/* Individual Pie Chart 2: Customer Growth */}
        <div className={styles.singleChart}>
          <div className={styles.donutChart}>
            <div className={`${styles.slice1} ${styles.greenSlice1}`}></div>
            <div className={`${styles.slice2} ${styles.greenSlice2}`}></div>
            <span className={styles.percentage}>22%</span>
          </div>
          <p className={styles.chartLabel}>Customer Growth</p>
        </div>

        {/* Individual Pie Chart 3: Total Revenue */}
        <div className={styles.singleChart}>
          <div className={styles.donutChart}>
            <div className={`${styles.slice1} ${styles.blueSlice1}`}></div>
            <div className={`${styles.slice2} ${styles.blueSlice2}`}></div>
            <span className={styles.percentage}>62%</span>
          </div>
          <p className={styles.chartLabel}>Total Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;