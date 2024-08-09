import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
import img from '../assets/anime.jpg';
import img2 from '../assets/anime2.jpeg';

const CardComponent = () => {
  return (
    <div className="main-container">
      <div className="thecard">

        <div className="card">
          <img src = {img} className="front" alt="..." />
          <div className="front-body">
            <h5 className="front-name">Utkarsh Bansal</h5>
            <p className="front-para">&nbsp;Lnmiit</p>
            <a href="#" className="btn btn-primary btn-front">Click here</a>
          </div>
        </div>

        <div className="back-card">
          <img src={img2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Utkarsh Bansal</h5>
            <p className="card-text">Developing things, to let my creative <br />mind free, Coz academics sucks!</p>
            <a href="#" className="btn btn-primary">Click here</a>
          </div>
        </div>
      </div>

      <div className="social-buttons">
        <a href="#" className="social-button social-button--facebook" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-button social-button--linkedin" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="social-button social-button--snapchat" aria-label="Snapchat">
          <i className="fab fa-snapchat-ghost"></i>
        </a>
        <a href="#" className="social-button social-button--github" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="social-button social-button--codepen" aria-label="CodePen">
          <i className="fab fa-codepen"></i>
        </a>
      </div>

    </div>
  );
};

export default CardComponent;