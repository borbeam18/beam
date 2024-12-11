import React from 'react';
import '../styles.css';

function Rooms() {
    return (
        <div className="container my-5">
            <h1 className="text-center">ห้องพัก</h1>
            <p className="text-center">เลือกดูห้องพักที่เหมาะกับคุณ</p>
            <div className="row">
                {/* เพิ่มข้อมูลห้องพัก */}
                <div className="col-md-4 my-3">
                    <div className="card">
                        <img 
                            src="https://via.placeholder.com/300x200" 
                            className="card-img-top" 
                            alt="Room 1" 
                        />
                        <div className="card-body">
                            <h5 className="card-title">ห้องพัก 1</h5>
                            <p className="card-text">รายละเอียดเกี่ยวกับห้องพัก</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className="card">
                        <img 
                            src="https://via.placeholder.com/300x200" 
                            className="card-img-top" 
                            alt="Room 2" 
                        />
                        <div className="card-body">
                            <h5 className="card-title">ห้องพัก 2</h5>
                            <p className="card-text">รายละเอียดเกี่ยวกับห้องพัก</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;
