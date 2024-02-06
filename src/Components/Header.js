import React from 'react'
import logo from "../img/Vector.png"
import back from "../img/background/Vector.svg"
import "./Header.css"
import 'boxicons'


const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header-inner">
                <div className="navbar">
                    <div className="logo">
                    <box-icon name='menu' color="#fff"></box-icon>
                        <img src={logo} alt="" />
                    </div>
                    <div className="link">
                        <ul>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Сервисы</a></li>
                            <li><a href="#">Портфолио</a></li>
                            <li><a href="#">Клиенты</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                        <div className="langue">
                    <ul>
                        <li><a href="#">EN</a></li>
                        <li><a href="#">RU</a></li>
                        <li><a href="#">UZ</a></li>
                    </ul>    
                    </div>
                    </div>
                </div>
                <div className="head">
                <img src={back} alt="" />
                    <h1>Bloom <br /> Architechture</h1>
                    <button className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="90" viewBox="0 0 90 90" fill="none">
            <path d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z" fill="#E3E7F2"/>
          </svg>
                    Order <br /> project</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header