// src/data/statsData.ts

// Define an interface for the shape of a single stat item for type safety (optional but recommended)
export interface StatItem {
    id: number;
    title: string;
    value: string;
    percentage: string;
    trend: 'up' | 'down';
    iconType: 'orders' | 'delivered' | 'canceled' | 'revenue';
  }
  
  // Export the statsData array
  export const statsData: StatItem[] = [
    { id: 1, title: 'Total Orders', value: '75', percentage: '4%', trend: 'up', iconType: 'orders' },
    { id: 2, title: 'Total Delivered', value: '357', percentage: '2%', trend: 'up', iconType: 'delivered' },
    { id: 3, title: 'Total Canceled', value: '65', percentage: '25%', trend: 'down', iconType: 'canceled' },
    { id: 4, title: 'Total Revenue', value: '$128', percentage: '10%', trend: 'up', iconType: 'revenue' },
  ];