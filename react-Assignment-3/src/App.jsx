import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import "./App.css";

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleCharacterClick = (id) => {
    setSelectedCharacterId(id);
  };

  return (
    <div className="app">
      <h1>Marvel Comics Characters</h1>
      <CharacterList onCharacterClick={handleCharacterClick} />
      {selectedCharacterId && <CharacterDetail characterId={selectedCharacterId} />}
    </div>
  );
};

export default App;