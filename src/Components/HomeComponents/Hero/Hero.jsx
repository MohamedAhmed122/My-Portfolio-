import React from "react";
import lap from "../../../assets/lap2.mp4";
import Typical from "react-typical";
import "./Styles.css";



const HeroBlock = () => (
  <header className="header-video ">
    <div className="video">
      <video autoPlay="true" loop muted>
        <source src={lap} type="video/mp4" />
      </video>
    </div>
    <div className="overlay"></div>
    <div className="content ">
      <h1>Hello</h1>
      <h2 className='h2'>
        I'm Mohamed Youssef <span>.</span>
        <br />
        <br />
        <Typical className='Typical'
          steps={[" Frontend Developer", 1000, "Frontend Developer, and Web Designer", 500]}
          loop={Infinity}
          wrapper="h3"
        />
      </h2>
      <button className="btn">View My Work </button>
    </div>
  </header>
);
export default HeroBlock;
