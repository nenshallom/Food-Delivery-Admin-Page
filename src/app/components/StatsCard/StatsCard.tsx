import React from 'react';
import styles from '../styles/StatsCard.module.css'; 
import { MdOutlineTrendingUp, MdOutlineTrendingDown } from 'react-icons/md';
import { FaClipboardList, FaBox, FaBan, FaDollarSign } from 'react-icons/fa'; 

interface StatsCardProps {
    title: string;
    value: string;
    percentage: string;
    trend: 'up' | 'down';
    iconType: 'orders' | 'delivered' | 'canceled' | 'revenue';
}

const getIcon = (type: string) => {
    switch (type) {
        case 'orders': return <FaClipboardList className={styles.iconOrders} />;
        case 'delivered': return <FaBox className={styles.iconDelivered} />;
        case 'canceled': return <FaBan className={styles.iconCanceled} />;
        case 'revenue': return <FaDollarSign className={styles.iconRevenue} />;
        default: return null;
    }
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value, percentage, trend, iconType }) => {
    const TrendIcon = trend === 'up' ? MdOutlineTrendingUp : MdOutlineTrendingDown;
    const trendColorClass = trend === 'up' ? styles.trendUp : styles.trendDown;

    return (
        <div className={styles.statsCard}>
            <div className={styles.iconCircle}>
                {getIcon(iconType)}
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardValue}>{value}</h3>
                <p className={styles.cardTitle}>{title}</p>
                <div className={styles.cardTrend}>
                    <TrendIcon className={`${styles.trendIcon} ${trendColorClass}`} />
                    <span className={trendColorClass}>{percentage} (30 days)</span>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;