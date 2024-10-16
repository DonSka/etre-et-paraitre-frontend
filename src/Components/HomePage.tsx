import { observer } from "mobx-react";
import { useState } from "react";
import { gameStore } from "../store";
import UsernameInput from "./UsernameInput";

const HomePage = observer(() => {
  const {
    isPinValid,
    gameCreator,
    generatePin,
    checkPin,
    createGame,
    errorMessage,
  } = gameStore;

  const [inputPin, setInputPin] = useState("");
  const [inputUsername, setInputUsername] = useState("");

  const handleCheckPin = async () => {
    await checkPin(inputPin);
  };

  return (
    <div className="colmn-space-btwn">
      <h1>ÊTRE ET PARAÎTRE</h1>
      {gameCreator || isPinValid ? (
        <div className="flex-column gap-1">
          <div className="flex">
            <UsernameInput
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
            />
            <button
              className="w-33 internal-btn"
              onClick={() => createGame(inputUsername)}
            >
              GO
            </button>
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      ) : (
        <div className="flex-column gap-1">
          <button onClick={generatePin}>Créer une partie</button>
          <h4>Ou</h4>
          <div className="flex">
            <input
              className="w-66 internal-input"
              placeholder="Code PIN ..."
              value={inputPin}
              onChange={(e) => setInputPin(e.target.value)}
            />
            <button className="w-33 internal-btn" onClick={handleCheckPin}>
              GO
            </button>
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
});

export default HomePage;
