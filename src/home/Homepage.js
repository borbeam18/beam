import React from 'react';
import RoomCard from '../components/RoomCard'; // นำเข้าคอมโพเนนต์ RoomCard
import '../styles.css';

function HomePage() {
    const rooms = [
        {
            name: 'ห้องพัก 1',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/536442679.jpg?k=7141650803b5f9dae4a70a556b6000f80bbcb493b5a043aec9ae7bde8b896522&o=&hp=1',
            description: 'ห้องพักขนาดใหญ่พร้อมวิวทะเล',
            reviews: [
                { rating: 4, text: "วิวสวย แต่ห้องน้ำควรได้รับการปรับปรุง" },
            ],
            id: 1,  // เพิ่ม ID เพื่อใช้ในการทำ Routing
        },
        {
            name: 'ห้องพัก 2',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/536437044.jpg?k=289e144f55de0b8ffee161b732edbe0bb8020e66ca0ae5b3896306a49e63a5cf&o=&hp=1',
            description: 'ห้องพักสบายๆ มีสระว่ายน้ำ',
            reviews: [
                { rating: 4, text: "มีความสุขกับการพักผ่อนมาก แต่ควรมีอาหารเช้าดีกว่านี้" },
            ],
            id: 2,  // เพิ่ม ID เพื่อใช้ในการทำ Routing
        },
        {
            name: 'ห้องพัก 3',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/536442680.jpg?k=8de009a67d41ecbddf8657d3e5f7634c6abd9096d58edb4497a9f7b9812643e6&o=&hp=1',
            description: 'ห้องพักหรูหราพร้อมอุปกรณ์ครบครัน',
            reviews: [
                { rating: 5, text: "ห้องพักหรูหราและสะดวกสบายที่สุด" },
            ],
            id: 3,  // เพิ่ม ID เพื่อใช้ในการทำ Routing
        },
        // เพิ่มห้องพักอื่นๆ ตามต้องการ
    ];

    return (
        <div>
            {/* Room Cards */}
            <div className="container my-4">
                <h2 className="text-center mb-4">แพ็กเกจแนะนำ</h2>
                <div className="row">
                    {rooms.map((room, index) => (
                        <RoomCard 
                            key={index} 
                            room={room} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
