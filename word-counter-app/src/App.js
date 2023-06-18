import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
   
    <div>
        <h1 style={{ textAlign: 'left' }}>Responsive paragraph word counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        rows={20} 
        style={{ width: '50%', height: '300px' }}// Set the desired number of rows for the textarea
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default App;
