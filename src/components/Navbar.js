import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="brandname">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Đặt Lịch Khám</Link>
    </div>
    <div className="function">
      <Link to="/search" style={{ textDecoration: 'none', color: 'white'}}>Tìm kiếm</Link>
      <Link to="/login" style={{ textDecoration: 'none', color: 'white', marginLeft: '1rem' }}>Đăng nhập</Link>
    </div>
  </div>
);

export default Navbar;
