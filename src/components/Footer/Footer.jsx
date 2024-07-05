// import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'


const Footer = () => {
  return (
      <div className="footer ">
          <div className="footer-icons ">
              <img src={youtube_icon} alt="" />
              <img src={twitter_icon} alt="" />
              <img src={facebook_icon} alt="" />
              <img src={instagram_icon} alt="" />
          </div>
          <ul>
              <li>Audio description</li>
              <li>Audio description</li>
              <li>Audio description</li>
              <li>Audio description</li>
              <li>Audio description</li>
              <li>Audio description</li>
              <li>Audio description</li>
          </ul>
          <p>1997-2023 Netflix, Inc.</p>
      </div>
  );
}

export default Footer
