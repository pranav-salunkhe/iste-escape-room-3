// PasscodeInput.js
import React, { useState } from 'react';
import backgroundImage from './assets/daisy.jpeg'; // Import your background image

const PasscodeInput = ({ onSubmit }) => {
  const [passcode, setPasscode] = useState('');

  const handleChange = (e) => {
    setPasscode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode.toLowerCase() === import.meta.env.VITE_PASS) {
      onSubmit();
    } else {
      alert('Incorrect passcode. Please try again.');
      setPasscode('');
    }
  };

  return (
    <div className="passcode-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter passcode"
          value={passcode}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasscodeInput;
