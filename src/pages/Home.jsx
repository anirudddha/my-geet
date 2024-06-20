import React from 'react';
import './home.css';

import logo from '../assets/Makeup_Artist _Logo.jpg';

const Home = () => {
  return (
    <div className="bg-music">
      <div className="container my-3">
        <div className="title">
          <div className="logo-container">
            <img style={{ width: "400px" }} src={logo} alt="Logo" />  
          </div>
          <h1>MY GEET STUDIOS</h1>
        </div>
        <div className="about my-3 mx-10">
          <h2 style={{textAlign:"center"}}>About us</h2>
          <p style={{textAlign:"center"}}>Welcome to My Geet Studios, where music meets creativity and customization. <br />
            At My Geet Studios, we believe that music has the power to elevate experiences, evoke
            emotions, and leave a lasting impression. <br />
            Our team consists of skilled composers, musicians, and audio engineers who bring a
            wealth of expertise and creativity to every project we undertake. From original
            compositions that resonate with your audience to personalized adaptations of existing
            tracks, our dedication to quality and creativity ensures that every piece of music we
            create is as exceptional as your project demands. <br />
            Whether you're a filmmaker, advertiser, game developer, or event organizer, we're
            committed to delivering music that not only meets but exceeds your expectations.
          </p>
        </div>
        <div className="vision">
          <h2 style={{textAlign:"center"}}>Our Mission and Vision</h2>
          <p style={{textAlign:"center"}}>
            Our mission is simple yet profound: to collaborate closely with our clients and bring their
            visions to life through custom-crafted music. Whether you're a filmmaker in need of a
            captivating soundtrack, a brand looking to establish a distinct sonic identity, or an event
            organizer seeking the perfect musical backdrop, we are dedicated to exceeding your
            expectations. <br />
            Our vision is to redefine the way music is created and experienced, by offering bespoke
            songwriting and composition services that empower individuals and businesses to
            harness the power of music to its fullest potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
