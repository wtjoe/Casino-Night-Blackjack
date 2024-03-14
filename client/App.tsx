import React, { useEffect } from "react";
import Socket from "./components/Socket";
import GameHeader from "./components/GameHeader";
import Dealer from "./components/Dealer";
import JoinForm from "./components/JoinForm";
import Player from "./components/Player";
import Opponent from "./components/Opponent";




const App: React.FC = () => {
  return (
    <>
      <Socket />
      <GameHeader />
      <Dealer />
      <JoinForm />
      <Player />
      <Opponent />
    </>
)};

export default App;