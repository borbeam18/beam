import React from 'react';
import Review from './Review'; // นำเข้าคอมโพเนนต์ Review

function RoomCard({ room, reviews }) {
    return (
        <div className="col-md-4 my-3">
            <div className="card shadow-sm border-light">
                <img 
                    src={room.image} 
                    className="card-img-top" 
                    alt={room.name} 
                />
                <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                    <p className="card-text">{room.description}</p>
                    <a href="#" className="btn btn-primary">จองเลย</a>

                    {/* แสดงรีวิว */}
                    {reviews.map((review, index) => (
                        <Review 
                            key={index}
                            rating={review.rating}
                            reviewText={review.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RoomCard;
