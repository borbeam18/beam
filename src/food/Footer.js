import React from 'react';
import '../styles.css';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container d-flex justify-content-between">
                {/* ส่วนข้อมูลด้านซ้าย */}
                <div>
                    <p><strong>ที่อยู่:</strong> ################</p>
                    <p><strong>โทร:</strong> ##########</p>
                    <p><strong>© 2024 Aurora Resort</strong></p>
                </div>
                {/* ส่วนแผนที่ด้านขวา */}
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0885685047697!2d100.5231862153162!3d13.736717801359524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991f9fb71873%3A0xf8e7a0d9d1465649!2z4Lia4Lij4Lih4Lia4LiZ4Lix4LiV4Li04LmB4Lih4LmA4LiI4Lij4LmM!5e0!3m2!1sth!2sth!4v1632728852674!5m2!1sth!2sth"
                        width="500"
                        height="200"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="map"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
