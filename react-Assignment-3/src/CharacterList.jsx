import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({ onCharacterClick }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=ccabece3c778dfc20722bb121c1d57a7&hash=f406df3c1c38c15d5175a7acfa5bc77a`
        );
        setCharacters(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div key={character.id} className="character-item" onClick={() => onCharacterClick(character.id)}>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;