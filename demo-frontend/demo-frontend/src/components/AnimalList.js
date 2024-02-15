import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axios.get('http://localhost:8080/animals/all');
      setAnimals(response.data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  return (
    <div>
      <h1>Animal List</h1>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>{animal.name} - {animal.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
