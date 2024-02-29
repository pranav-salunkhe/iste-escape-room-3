// App.js
import React, { useState } from 'react';
import PasscodeInput from './PasscodeInput';
import ClueScreen from './ClueScreen';
import clueImage from './assets/clue.jpeg'; // import your clue image

const App = () => {
  const [showClue, setShowClue] = useState(false);

  const handlePasscodeSubmit = () => {
    setShowClue(true);
  };

  return (
    <div>
      {showClue ? (
        <ClueScreen imageUrl={clueImage} />
      ) : (
        <PasscodeInput onSubmit={handlePasscodeSubmit} />
      )}
    </div>
  );
};

export default App;
