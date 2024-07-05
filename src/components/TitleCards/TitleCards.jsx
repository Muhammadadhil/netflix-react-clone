// import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef } from 'react';
import { useEffect } from 'react';


//disable eslint for next line
const TitleCards = ({title}) => {

  const cardsRef=useRef();

  const handlewheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>{
    console.log('use Effect worked!!!');
    cardsRef.current.addEventListener('wheel',handlewheel)
    console.log("use Effect 2222 worked!!!");

  },[])

  return (
      <div className="title-cards">
          <h1>{title ? title : "popular of netflix"}</h1>
          <div className="card-list" ref={cardsRef}>
              {cards_data.map((card, index) => {
                  return (
                      <div className="card" key={index}>
                          <img src={card.image} alt="" />
                          <p>{card.name}</p>
                      </div>
                  );
              })}
          </div>
      </div>
  );
}

export default TitleCards
