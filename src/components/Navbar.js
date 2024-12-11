import React from 'react';
import '../styles.css';

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    {/* ชื่อแบรนด์ */}
                    <a className="navbar-brand aurora-brand" href="#">Aurora Resort</a>

                    {/* ปุ่ม Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* เมนู */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">หน้าแรก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ห้องพัก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ติดต่อเรา</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
