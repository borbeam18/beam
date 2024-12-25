import React, { useState } from 'react';
import { Modal, Button, Form, Carousel } from 'react-bootstrap';
import '../styles.css';

const rooms = [
  {
    id: 1,
    name: 'ห้องพัก 1',
    description: 'ห้องพักขนาดใหญ่พร้อมวิวทะเล',
    images: [
      'https://via.placeholder.com/600x400?text=Room+1+Image+1',
      'https://via.placeholder.com/600x400?text=Room+1+Image+2',
      'https://via.placeholder.com/600x400?text=Room+1+Image+3'
    ],
    features: 'วิวทะเล, ระเบียงส่วนตัว, ติดชายหาด'
  },
  {
    id: 2,
    name: 'ห้องพัก 2',
    description: 'ห้องพักสบายๆ มีสระว่ายน้ำ',
    images: [
      'https://via.placeholder.com/600x400?text=Room+2+Image+1',
      'https://via.placeholder.com/600x400?text=Room+2+Image+2',
      'https://via.placeholder.com/600x400?text=Room+2+Image+3'
    ],
    features: 'สระว่ายน้ำส่วนตัว, พื้นที่พักผ่อน'
  },
  {
    id: 3,
    name: 'ห้องพัก 3',
    description: 'ห้องพักติดชายหาด บรรยากาศสุดผ่อนคลาย',
    images: [
      'https://via.placeholder.com/600x400?text=Room+3+Image+1',
      'https://via.placeholder.com/600x400?text=Room+3+Image+2',
      'https://via.placeholder.com/600x400?text=Room+3+Image+3'
    ],
    features: 'ติดชายหาด, ห้องน้ำส่วนตัว'
  },
];

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null); // ห้องที่ถูกเลือก
  const [formData, setFormData] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
  });
  const [showModal, setShowModal] = useState(false); // สถานะการแสดง Modal

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setShowModal(true); // เปิด Modal เมื่อเลือกห้อง
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`จองห้องพัก "${selectedRoom.name}" สำเร็จ!`);
    setShowModal(false); // ปิด Modal หลังจากการจอง
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">ห้องพัก</h1>
      <div className="row">
        {/* แสดงห้องพักทั้งหมด */}
        {rooms.map((room) => (
          <div key={room.id} className="col-md-4 my-3">
            <div className="card">
              <Carousel>
                {room.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`room-${room.id}-image-${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="card-body">
                <h5 className="card-title">{room.name}</h5>
                <Button
                  onClick={() => handleRoomSelect(room)}
                  className="btn btn-primary"
                >
                  จองห้องนี้
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal ฟอร์มการจองห้อง */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>จองห้อง: {selectedRoom?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* แสดงรายละเอียดห้องพักใน Modal */}
          <div className="room-details mb-4">
            <h5>รายละเอียดห้อง</h5>
            <Carousel>
              {selectedRoom?.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`room-${selectedRoom.id}-image-${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <p><strong>คำอธิบาย:</strong> {selectedRoom?.description}</p>
            <p><strong>สิ่งอำนวยความสะดวก:</strong> {selectedRoom?.features}</p>
          </div>

          {/* ฟอร์มการจอง */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>ชื่อผู้จอง</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>วันที่เข้าพัก</Form.Label>
              <Form.Control
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>วันที่ออก</Form.Label>
              <Form.Control
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>จำนวนคน</Form.Label>
              <Form.Control
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleFormChange}
                min="1"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              ยืนยันการจอง
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Rooms;
