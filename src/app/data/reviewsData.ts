// src/data/reviewsData.ts

// Define a type for a single review item
export interface Review { // Export the interface if it's only used here or elsewhere
  id: number;
  reviewerName: string;
  reviewDate: string;
  rating: number;
  reviewText: string;
  avatarUrl: string; // Path to reviewer avatar image
  foodImageUrl: string; // Path to food image
}

// Dummy data for reviews
export const reviewsData: Review[] = [ // Export the data array
  {
    id: 1,
    reviewerName: 'Jhon Due',
    reviewDate: '21 May 2020',
    rating: 4,
    reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    avatarUrl: '/images/ReviewAvatar.png',
    foodImageUrl: '/images/Review-image.png',
  },
  {
    id: 2,
    reviewerName: 'Jane Smith',
    reviewDate: '20 May 2020',
    rating: 5,
    reviewText: 'Excellent service and delicious food! Highly recommend this restaurant to everyone.',
    avatarUrl: '/images/ReviewerAvatar2.png',
    foodImageUrl: '/images/Review-image2.png',
  },
  {
    id: 3,
    reviewerName: 'Alice Johnson',
    reviewDate: '19 May 2020',
    rating: 3,
    reviewText: 'Food was okay, but the delivery was a bit late. Could be better next time.',
    avatarUrl: '/images/ReviewerAvater3.png',
    foodImageUrl: '/images/Review-image.png',
  },
  {
    id: 4,
    reviewerName: 'Bob Williams',
    reviewDate: '18 May 2020',
    rating: 5,
    reviewText: 'Absolutely fantastic! The best meal I\'ve had in a long time. Will order again.',
    avatarUrl: '/images/ReviewerAvater3.png',
    foodImageUrl: '/images/Review-image.png',
  },
  {
    id: 5,
    reviewerName: 'Charlie Brown',
    reviewDate: '17 May 2020',
    rating: 4,
    reviewText: 'Good portion sizes and tasty dishes. The app was easy to use too.',
    avatarUrl: '/images/ReviewerAvater3.png',
    foodImageUrl: '/images/Review-image2.png',
  },
  {
    id: 6,
    reviewerName: 'Diana Prince',
    reviewDate: '16 May 2020',
    rating: 5,
    reviewText: 'Super fast delivery and everything was still hot. Great experience overall!',
    avatarUrl: '/images/ReviewerAvater3.png',
    foodImageUrl: '/images/Review-image2.png',
  },
];