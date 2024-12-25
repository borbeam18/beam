import React from 'react';
import { Link } from 'react-router-dom';

function RoomCard({ room }) {
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
          {/* ลิงก์ไปหน้า Rooms ซึ่งจะแสดงห้องพักและฟอร์มการจอง */}
          <Link to={`/rooms/${room.id}`} className="btn btn-primary">
            ไปที่หน้าการจอง
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
