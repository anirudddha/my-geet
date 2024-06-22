// MusicOrderForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './services.css';

const MusicOrderForm = () => {
  const navigate = useNavigate();

  const handlePackageSelect = (price) => {
    navigate(`/price?price=${price}`);
  };

  return (
    <div className="container">
      <h1 style={{ marginTop: "20px" }}>Pricing</h1>
      <p className="intro-text">
        At Geet, we're committed to making music creation accessible to everyone, from beginners to experienced artists. Our range of plans is designed to cater to diverse needs and budgets, offering essential tools and advanced features to enhance your creative process. Whether you're producing your first track or refining a masterpiece, Geet provides the tools and support you need to bring your musical vision to life. Join our community of musicians and producers today to explore endless possibilities and unlock your full potential.
      </p>

      <div className="prices-container">
        <div className="prices basic" onClick={() => handlePackageSelect(2500)}>
          <div className="section">
            <span>Basic Package <br /><span>(Limited Time offer)</span></span>
          </div>
          <div className="bullet">
            <p className="feature"><span>⦿</span> Price: Rs. 2500</p>
            <p className="feature"><span>⦿</span> Duration: Up to 2 minutes</p>
            <p><span>⦿</span> Customized lyrics based on provided information</p>
            <p><span>⦿</span> Melody composed specifically for your song</p>
            <p><span>⦿</span> Professionally recorded vocals</p>
            <p><span>⦿</span> Standard instrumentation</p>
          </div>
        </div>

        <div className="prices standard" onClick={() => handlePackageSelect(4000)}>
          <div className="section">
            <span>Standard Package</span>
          </div>
          <div className="bullet">
            <p className="feature"><span>⦿</span> Price: Rs. 4000</p>
            <p className="feature"><span>⦿</span> Duration: Up to 3 minutes</p>
            <p><span>⦿</span> Customized lyrics tailored to your preferences</p>
            <p><span>⦿</span> Original melody composition</p>
            <p><span>⦿</span> High-quality vocal recording</p>
            <p><span>⦿</span> Enhanced instrumentation with more layers and depth</p>
          </div>
        </div>

        <div className="prices premium" onClick={() => handlePackageSelect(6000)}>
          <div className="section">
            <span>Premium Package</span>
          </div>
          <div className="bullet">
            <p className="feature"><span>⦿</span> Price: Rs. 6000</p>
            <p className="feature"><span>⦿</span> Duration: Up to 4 minutes</p>
            <p><span>⦿</span> Highly personalized lyrics crafted to your story or message</p>
            <p><span>⦿</span> Unique and intricate melody composition</p>
            <p><span>⦿</span> Professional-grade vocal recording with multiple harmonies</p>
            <p><span>⦿</span> Advanced instrumentation including additional instruments and production effects</p>
          </div>
        </div>

        <div className="prices deluxe" onClick={() => handlePackageSelect(12000)}>
          <div className="section">
            <span>Deluxe Package</span>
          </div>
          <div className="bullet">
            <p className="feature"><span>⦿</span> Price: Rs. 12000</p>
            <p className="feature"><span>⦿</span> Duration: Up to 5 minutes</p>
            <p><span>⦿</span> Fully bespoke lyrics reflecting your emotions, experiences, or narrative</p>
            <p><span>⦿</span> Original and elaborate melody composition tailored to your taste</p>
            <p><span>⦿</span> Studio-quality vocal recording with extensive vocal arrangements</p>
            <p><span>⦿</span> Full-scale instrumentation with orchestral elements, if desired</p>
            <p><span>⦿</span> Customized production to bring out the desired mood and atmosphere</p>
            <p><span>⦿</span> Distribution on all major music platforms, including Spotify, Apple Music, Amazon Music, YouTube Music, Instagram and more</p>
            <p><span>⦿</span> Handling of licensing and distribution processes</p>
            <p><span>⦿</span> Retention of all rights and royalties for your music</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicOrderForm;
