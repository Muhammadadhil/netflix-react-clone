// import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import TitleCards from '../../components/TitleCards/TitleCards';
// import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../api/movieApi";

const Home = () => {

    const [apiData,setApiData]=useState([]);

    useEffect(()=>{
        const getMovies = async () => {
            const movies = await fetchMovies("popular");
            console.log("movies:", movies);
            setApiData(movies);
        };
        getMovies()
    },[])


    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={`https://image.tmdb.org/t/p/w500${apiData[2]?.backdrop_path}`} alt="" className="banner-img" />
                <div className="hero-caption">
                    <img src={hero_title} alt="" className="caption-img" />
                    <p>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks on a quest to save the city from an immoral enemy.</p>
                    <div className="hero-btns">
                        <button className="btn">
                            <img src={play_icon} alt="" /> Play
                        </button>
                        <button className="btn dark-btn">
                            <img src={info_icon} alt="" /> More info
                        </button>
                    </div>
                    <TitleCards title={"Now playing"} category={"now_playing"} />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Only on netflix"} category={"popular"} />
                <TitleCards title={"Upcoming series"} category={"top_rated"} />
                <TitleCards title={"Top pics for you"} category={"upcoming"} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
