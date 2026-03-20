import React from 'react'
import { Link } from 'react-router-dom'
import { MonitorDot, Menu } from 'lucide-react'
import Navbar from './Navbar';
import '../css/Header.css'


export default function Header() {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
            <Link to='/'><img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="로고" /><span className="blind">원데이클래스</span></Link>
          </h1>
        <Navbar />
        <div className="util-area">
          <Link to="/classes" className="util-link"><MonitorDot /> 문의하기</Link>
          <button className='btn-menu'><Menu /> 메뉴</button>
        </div>
      </div>
    </header>
  )
}
