import React from 'react';
import { Link } from 'react-router-dom';  // นำเข้า Link จาก react-router-dom

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
                    
                    {/* ใช้ Link เพื่อให้ไปยังหน้าห้องพัก */}
                    <Link to={`/room/${room.id}`} className="btn btn-primary">จองเลย</Link>
                </div>
            </div>
        </div>
    );
}

export default RoomCard;
