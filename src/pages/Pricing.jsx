// Pricing.jsx
import React, { useState } from 'react';
import './price.css';
import { useLocation } from 'react-router-dom';
import { db } from '../Firebase'; // Import the Firestore instance
import { collection, addDoc } from "firebase/firestore"; 

const Pricing = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const price = params.get('price');
  const packageName = params.get('package');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "orders"), formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="music-order-form-container">
      <h1 style={{ color: "black", textAlign: "center" }}> <span style={{fontSize:"25px"}}>You Selected</span>  <br /> <span style={{color:"brown",fontWeight:"800",textShadow:"2px 2px 2px black"}}> {packageName} Package </span></h1>
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
        <div className="pricess my-3">
          <h2 style={{color:"brown",textAlign:"center",fontWeight:"600"}}>Price ₹{price}</h2>
        </div>
        <button type="submit" className="submit-button">Submit Order</button>
      </form>
    </div>
  );
}

export default Pricing;
