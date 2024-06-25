import React, { useState } from 'react';
import './price.css';
import { useLocation } from 'react-router-dom';

const Pricing = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const price = params.get('price');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occasion: '',
    details: '',
    address: '',
    mood: '',
    package: '',
    language: '',
    detailedPrescription: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="music-order-form-container">
      <h1 style={{ color: "black", textAlign: "center" }}>You Selected <br /> Basic package Rs-{price}</h1>
      <form onSubmit={handleSubmit} className="music-order-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Uncomment if needed
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <input
            type="text"
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          />
        </div>
        */}

        <div className="form-group">
          <label htmlFor="mood">Mood:</label>
          <select
            id="mood"
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            required
          >
            <option value="">Select a mood</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Energetic">Energetic</option>
            <option value="Celebration">Celebration</option>
            <option value="Peaceful">Peaceful</option>
            <option value="Romantic">Romantic</option>
          </select>
        </div>

        {/* Uncomment if needed
        <div className="form-group">
          <label htmlFor="package">Package:</label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
          >
            <option value="">Select a package</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Deluxe">Deluxe</option>
          </select>
        </div>
        */}

        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          >
            <option value="">Select a language</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Marathi">Marathi</option>
            <option value="Punjabi">Punjabi</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="detailedPrescription">Detailed Prescription:</label>
          <textarea
            id="detailedPrescription"
            name="detailedPrescription"
            value={formData.detailedPrescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="details">Additional Details:</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit Order</button>
      </form>
    </div>
  );
}

export default Pricing;
