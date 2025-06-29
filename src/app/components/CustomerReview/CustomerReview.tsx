
"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/CustomerReview.module.css';
import { FaStar } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { reviewsData } from '../../data/reviewsData'; 


const CustomerReview: React.FC = () => {
  const reviewListRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (reviewListRef.current) {
      const scrollAmount = reviewListRef.current.offsetWidth / 1;
      reviewListRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (reviewListRef.current) {
      const scrollAmount = reviewListRef.current.offsetWidth / 1;
      reviewListRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.customerReviewContainer}>
      <div className={styles.reviewHeader}>
        <div>
          <h3>Customer Review</h3>
          <p className={styles.headerDescription}>Eum fuga consequuntur utadjsn et.</p>
        </div>
        <div className={styles.headerControls}>
          <div className={styles.navigationArrows}>
            <button className={styles.navArrowButton} onClick={scrollLeft}>
              <MdKeyboardArrowLeft />
            </button>
            <button className={styles.navArrowButton} onClick={scrollRight}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.reviewList} ref={reviewListRef}>
        {reviewsData.map((review) => ( 
          <div key={review.id} className={styles.reviewItem}>
            <div className={styles.reviewerInfo}>
              <Image
                src={review.avatarUrl}
                alt={review.reviewerName}
                width={50}
                height={50}
                className={styles.reviewerAvatar}
              />
              <div className={styles.reviewerDetails}>
                <span className={styles.reviewerName}>{review.reviewerName}</span>
                <span className={styles.reviewDate}>{review.reviewDate}</span>
                <div className={styles.reviewStars}>
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < review.rating ? styles.filledSmallStar : styles.emptySmallStar} />
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.reviewContent}>
                <p className={styles.reviewText}>{review.reviewText}</p>
                <Image
                  src={review.foodImageUrl}
                  alt="Food reviewed"
                  width={100}
                  height={100}
                  className={styles.reviewFoodImage}
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;