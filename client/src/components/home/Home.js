import React from "react";
import Navbar from "../navbar/Navbar";
import "./home.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className = "home-container">
        <h3 className="home-title-2">CÔNG NGHỆ PHẦN MỀM</h3>
        <h1 className="home-title text-black extra-bold">PHÂN TÍCH HỆ THỐNG THU GOM RÁC UWC 2.0</h1>
      </div>
      <div className="background-1"
    style = {{backgroundImage: `url(https://antimatter.vn/wp-content/uploads/2022/05/background-xanh-la.jpg)`}}>
    </div>
    </>
  )
}

export default Home
