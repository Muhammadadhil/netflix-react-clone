// import React from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const [apiData,setApiData]=useState({name:'',key:'',published_at:'',type:''});
   
  const {movieId}=useParams();
  const navigate=useNavigate();


  const options = {
      method: "GET",
      headers: {
          accept: "application/json",
          Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTdmMjNjNjdiZmI0NGY0OWZhYmI3ZDM2NGM3MjZmMCIsIm5iZiI6MTcyMDI0MDY2NC45NzYwMzYsInN1YiI6IjY2ODhjN2I2MjM2OTQ1OTcxZjJjZWVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XXzU-JmtbyMnfa07M6UrGtiSZoaIu7M-E0mHpE946Cs",
      },
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        .then((response) => response.json())
        .then((response) => {
          console.log('respnose for movie trailer:',response);
          setApiData(response.results[0]);
        })
        .catch((err) => console.error(err));  
  },[])


  return (
      <div className="player">
          <img onClick={() => navigate(-2)} src={back_arrow} alt="back arrow icon" />
          <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" title="trailer" frameBorder="0" allowFullScreen></iframe>
          <div className="player-info">
              <p>{apiData.published_at}</p>
              <p>{apiData.name}</p>
              <p>{apiData.type}</p>
          </div>
      </div>
  );
}

export default Player
