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
      <h1 style={{ color: "black" ,textAlign:"center" }}>You Selected <br /> Basic package Rs-{price}</h1>
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
