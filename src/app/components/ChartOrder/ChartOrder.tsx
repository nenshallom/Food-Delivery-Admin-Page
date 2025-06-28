// src/components/ChartOrder/ChartOrder.tsx
import React from 'react';
import styles from '../styles/ChartOrder.module.css'; // Import styles for ChartOrder
import { MdOutlineFileDownload } from 'react-icons/md'; // For the download icon

const ChartOrder: React.FC = () => {
  return (
    <div className={styles.chartOrderContainer}>
      <div className={styles.chartHeader}>
        <div>
          <h3 className={styles.chartTitle}>Chart Order</h3>
          <p className={styles.chartDescription}>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <button className={styles.saveReportButton}>
          <MdOutlineFileDownload className={styles.downloadIcon} />
          Save Report
        </button>
      </div>

      <div className={styles.chartArea}>
        {/* Placeholder for the wavy line chart */}
        {/* This SVG is a static representation to match the design. */}
        <svg className={styles.chartSvg} viewBox="0 0 500 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.5"/> {/* Light blue at top */}
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/> {/* Transparent at bottom */}
            </linearGradient>
          </defs>
          {/* Main wavy line */}
          <path
            d="M0 150 Q50 80, 100 120 T200 100 Q250 80, 300 110 T400 90 Q450 120, 500 80"
            fill="none"
            stroke="#007bff"
            strokeWidth="3"
          />
          {/* Area under the curve */}
          <path
            d="M0 150 Q50 80, 100 120 T200 100 Q250 80, 300 110 T400 90 Q450 120, 500 80 L500 200 L0 200 Z"
            fill="url(#chartGradient)"
            stroke="none"
          />
          {/* Specific point and dashed line for the tooltip example */}
          <circle cx="160" cy="110" r="6" fill="#007bff" /> {/* Point for "Tuesday" */}
          <line x1="160" y1="110" x2="160" y2="200" stroke="#007bff" strokeDasharray="5,5" strokeOpacity="0.7" />
        </svg>

        {/* Placeholder for the tooltip on hover (initially hidden) */}
        <div className={styles.chartTooltip}>
          <span className={styles.tooltipValue}>456 Order</span>
          <span className={styles.tooltipDate}>Oct 18th, 2020</span>
        </div>

        <div className={styles.chartLabels}>
          <span>Sunday</span>
          <span>Monday</span>
          <span>Tuesday</span>
          <span>Wednesday</span>
          <span>Thursday</span>
          <span>Friday</span>
          <span>Saturday</span>
        </div>
      </div>
    </div>
  );
};

export default ChartOrder;