import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProgressBar.css'; // ton fichier CSS

function Bar() {
  return (
    <div className="bar-container">
      <p>HTML5 90%</p>
      <ProgressBar now={90} className="html-bar" />
      <p>CSS3 80%</p>
      <ProgressBar now={80} className="css-bar" />
      <p>JAVASCRIPT 70%</p>
      <ProgressBar now={70} className="js-bar" />
      <p>PHP 60%</p>
      <ProgressBar now={60} className="php-bar" />
      <p>REACT 50%</p>
      <ProgressBar now={50} className="react-bar" />
    </div>
  );
}

export default Bar;
