import './App.css';

import React, {useState} from 'react';

export default function App() {
  // 👇️ Initialize state to default checked radio button
  const [selected, setSelected] = useState('yes');

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          id="yes"
          name="choose"
          value="yes"
          checked={selected === 'yes'}
          onChange={handleChange}
        />
        <label htmlFor="yes">Yes</label>

        <input
          type="radio"
          id="no"
          name="choose"
          value="no"
          onChange={handleChange}
          checked={selected === 'no'}
        />
        <label htmlFor="no">No</label>

        <input
          type="radio"
          id="maybe"
          name="choose"
          value="maybe"
          onChange={handleChange}
          checked={selected === 'maybe'}
        />
        <label htmlFor="maybe">Maybe</label>
      </div>
    </div>
  );
}
