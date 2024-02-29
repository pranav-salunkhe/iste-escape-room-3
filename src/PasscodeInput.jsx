// PasscodeInput.js
import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Enter passcode"
        value={passcode}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PasscodeInput;
