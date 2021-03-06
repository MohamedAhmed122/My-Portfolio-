import React from "react";
import lap from "../../../assets/lap2.mp4";
import Typical from "react-typical";
import "./Styles.css";
import { Button } from "@material-ui/core";

const HeroBlock = () => {

    const handleScroll =()=>{
        window.scrollTo({top:2120,behavior: 'smooth'})
    }
    return (
        <header className="header-video ">
        <div className="video">
            <video autoPlay loop muted>
            <source src={lap} type="video/mp4" />
            </video>
        </div>
        <div className="overlay"></div>
        <div className="content ">
            <h1>Hello</h1>
            <h2 className="h2">
            I'm Mohamed Youssef <span>.</span>
            </h2>
            <Typical
            className="Typical"
            steps={[
                " Front-End Developer ",
                1000,
                "Front-End Developer, and Web Designer",
                1000,
            ]}
            loop={Infinity}
            wrapper="h3"
            />
            <button type='submit' onClick={()=>handleScroll()} className="btn">View My Work </button>
        </div>
        </header>
    );
};
export default HeroBlock;
