import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <a className="navbar-brand aurora-brand" href="#">Aurora Resort</a>
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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">หน้าแรก</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rooms">ห้องพัก</Link>
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
