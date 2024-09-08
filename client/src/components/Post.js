import React from 'react';

export default function Post(){
    return(
    <div className="post">
      <div className="image">
        <img src="https://merriam-webster.com/assets/ld/word_of_the_day/images/3581/large.jpg" alt=""/>
      </div>
      <div className="texts">
        <h2>Sabra Rapling, Lanka Ella</h2>
        <p className="info">
          <a className="author">Pramuditha Bandara</a>
          <time>2024-09-08 14:07</time>
        </p>
        <p className="summary">Take on the ultimate adventure with Rapling! Face the challenge, scale new heights, 
          and feel the adrenaline surge through you. Enjoy the excitement of descending steep cliffs and stunning natural views.</p>
      </div>
    </div>
    );
}