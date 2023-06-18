import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button className="pick-color-button" onClick={handleButtonClick}>
        Pick a color
      </button>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
      {selectedColor && (
        <div className="selected-color">
          Selected Color: <span className="color-box" style={{ backgroundColor: selectedColor }} />
        </div>
      )}
    </div>
  );
};

export default App;
