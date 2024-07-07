// import React from 'react'
import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import {fetchMovies} from '../../api/movieApi';
import {Link} from "react-router-dom"


//disable eslint for next line
const TitleCards = ({title,category}) => {
  console.log('categoryL',category);
  const cardsRef=useRef();
  const [apiData,setApiData]=useState([]);

  
  const handlewheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>{

    const getMovies=async()=>{
        const movies =await fetchMovies(category);
        console.log('movies:',movies);
        setApiData(movies)
    }
    getMovies();
    cardsRef.current.addEventListener('wheel',handlewheel)

  },[])

  return (
      <div className="title-cards">
          <h1>{title ? title : "popular of netflix"}</h1>
          <div className="card-list" ref={cardsRef}>
              {apiData.map((card, index) => {
                  return (
                      <Link to={`/player/${card.id}`} className="card" key={index}>
                          <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                          <p>{card.original_title}</p>
                      </Link>
                  );
              })}
          </div>
      </div>
  );
}

export default TitleCards
