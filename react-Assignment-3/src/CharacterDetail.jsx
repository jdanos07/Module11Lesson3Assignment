import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=ccabece3c778dfc20722bb121c1d57a7&hash=f406df3c1c38c15d5175a7acfa5bc77a`
        );
        setCharacterDetails(response.data.data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (characterId) {
      fetchCharacterDetails();
    }
  }, [characterId]);

  if (loading) return <div>Loading...</div>;

  if (!characterDetails) return <div>No details available.</div>;

  return (
    <div className="character-detail">
      <h2>{characterDetails.name}</h2>
      <p>{characterDetails.description || 'No description available'}</p>
      <h3>Comics:</h3>
      <ul>
        {characterDetails.comics.items.map((comic) => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;