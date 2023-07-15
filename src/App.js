import React, { useState } from 'react';
import validator from 'validator';
import image from './image1.png';
import search from './search 1.png';
import facebook from './facebook 1.png';
import './App.css';

const App = () => {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '', 
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.email || !validator.isEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter a password.';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    }
    if (formData.password !== formData.confirmPassword) {  
      newErrors.confirmPassword = 'Error: Please make sure your passwords and confirm passwords match!';
    }
    setErrors(newErrors);

    // success message
    if (Object.keys(newErrors).length === 0) {
      setSuccess('Successfully Created!');
    }
  };

  return (
    <div className="App">
      <div className='icon'>
        <h2>Find 3D Objects, Mockups, and Illustrations here</h2>
        <img src={image} alt="" />
      </div>
      <div className='myForm'>
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className='logo'>
            <span><img src={search} alt="" />Sign up with Google </span>
            <span><img src={facebook} alt="" />Sign up with Facebook </span>
          </div>
          <p>-OR-</p>

          <input type='text' placeholder='Full Name' name="name"
            value={formData.name}
            onChange={handleInputChange} />
          <input type='email' placeholder='Email Address'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input type='password' placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input type='password' placeholder='Confirm Password'
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <button>Create Account</button>
          {/* message */}
          {success ? <p id='sucess'>{success}</p> : <p id='error'>{Object.values(errors).join(', ')}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
