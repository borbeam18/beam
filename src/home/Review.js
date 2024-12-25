import React from 'react';

function Review({ rating, reviewText }) {
    return (
        <div className="review mt-3">
            <p><strong>รีวิวจากผู้เข้าพัก:</strong></p>
            <p>"{reviewText}" - <span className="text-warning">{'⭐'.repeat(rating)}</span></p>
        </div>
    );
}

export default Review;
