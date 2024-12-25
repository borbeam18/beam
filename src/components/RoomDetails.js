import React from 'react';
import { useParams } from 'react-router-dom';

function RoomDetails() {
    const { id } = useParams();

    // Mock data สำหรับตัวอย่าง
    const rooms = [
        { id: '1', name: 'ห้องพัก 1', description: 'ห้องพักวิวทะเล', image: 'https://via.placeholder.com/300x200' },
        { id: '2', name: 'ห้องพัก 2', description: 'ห้องพักหรูหรา', image: 'https://via.placeholder.com/300x200' },
    ];

    const room = rooms.find(r => r.id === id);

    if (!room) {
        return <p>ไม่พบข้อมูลห้องพัก</p>;
    }

    return (
        <div className="container my-5">
            <h1>{room.name}</h1>
            <img src={room.image} alt={room.name} className="img-fluid" />
            <p>{room.description}</p>
        </div>
    );
}

export default RoomDetails;
