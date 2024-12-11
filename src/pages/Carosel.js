import React from 'react';
import '../Car.css'; // เพิ่มไฟล์ CSS สำหรับปรับขนาด

function Carosel() {
    return (
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/536437691.jpg?k=7bcffb65af038bda0b0346a0f04920f65aa16aec70314c52fb1b727d44df9500&o=&hp=1"
                        className="d-block w-100 h-1 carousel-image"
                        alt="รูป1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://chillpainai.com/storage/scoop/16122/shamrockchiangmai-1200-91.jpg"
                        className="d-block w-100 carousel-image"
                        alt="รูป2"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://chillpainai.com/storage/scoop/16122/shamrockchiangmai-1200-85.jpg"
                        className="d-block w-100 carousel-image"
                        alt="รูป3"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carosel;
