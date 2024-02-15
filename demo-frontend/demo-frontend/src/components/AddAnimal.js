import React, { useState } from 'react';
import axios from 'axios';

const AddAnimal = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/animals', { name, type });
      setName('');
      setType('');
    } catch (error) {
      console.error('Error adding animal:', error);
    }
  };

  return (
    <div>
      <h2>Add Animal</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddAnimal;
