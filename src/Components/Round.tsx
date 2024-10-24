import { observer } from "mobx-react";
import { gameStore } from "../store";

const Round = observer(() => {
  const { currentRound } = gameStore;

  return (
    <>
      {currentRound ? (
        <div className="colmn-center gap-2">
          <h4>Manche {currentRound.id}</h4>
          <h2 className="uppercase">{currentRound.name}</h2>
        </div>
      ) : null}
    </>
  );
});

export default Round;
