import React from 'react';
import Rating from 'react-rating-stars-component';


const StarRating = () => {
    const handleRatingChange = (newRating) => {
        console.log('New rating:', newRating);
        // You can handle the new rating value here, such as sending it to the server.
      };
    return (
        <div>
      <Rating
        count={5}
        size={24}
        onChange={handleRatingChange}
        activeColor="#ffd700"
      />
            
        </div>
    );
};

export default StarRating;