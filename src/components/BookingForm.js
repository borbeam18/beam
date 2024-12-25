import React, { useState } from 'react';

function BookingForm({ selectedRoom, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRoom) {
      onSubmit(formData);  // ส่งข้อมูลไปที่ onSubmit ที่มาจาก parent component
    } else {
      alert('กรุณาเลือกห้องก่อนทำการจอง');
    }
  };

  return (
    <div className="booking-form">
      <h2>จองห้อง: {selectedRoom ? selectedRoom.name : 'ยังไม่ได้เลือกห้อง'}</h2>
      {selectedRoom ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">ชื่อผู้จอง</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="checkInDate" className="form-label">วันที่เข้าพัก</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              className="form-control"
              value={formData.checkInDate}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="checkOutDate" className="form-label">วันที่ออก</label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              className="form-control"
              value={formData.checkOutDate}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="guests" className="form-label">จำนวนคน</label>
            <input
              type="number"
              id="guests"
              name="guests"
              className="form-control"
              value={formData.guests}
              onChange={handleFormChange}
              min="1"
              required
            />
          </div>

          <button type="submit" className="btn btn-success">ยืนยันการจอง</button>
        </form>
      ) : (
        <p>กรุณาเลือกห้องพักก่อนทำการจอง</p>
      )}
    </div>
  );
}

export default BookingForm;
