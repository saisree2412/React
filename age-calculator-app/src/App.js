import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const App = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const handleChange = (e) => {
    setBirthdate(e.target.value);
  };

  const calculateAge = () => {
    const currentDate = new Date();
    const birthdateObj = new Date(birthdate);

    if (birthdateObj > currentDate) {
      setAge('Invalid birthdate');
      return;
    }

    const ageInMillis = currentDate - birthdateObj;
    const ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365));
    setAge(ageInYears);
  };

  return (
    <div className="container">
      <div className="center">
        <h1 className="title">Age Calculator</h1>
        <label className="label">Enter your birthdate:</label>
        <input
          type="date"
          value={birthdate}
          onChange={handleChange}
          className="input"
        />
        <button onClick={calculateAge} className="button">
          Calculate Age
        </button>
        {age !== null && <p className="result">Your age is {age} years.</p>}
      </div>
    </div>
  );
};

export default App;
