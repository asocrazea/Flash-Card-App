import react, { useEffect, useState } from "react";
import CreateDeck from "./CreateDeck";
import Header from "../Layout/Header";
import {
  listDecks,
  deleteDeck,
  readDeck,
  updateDeck,
} from "../utils/api/index";
import Study from "./Study";

function Home() {
  const [decks, setDecks] = useState(decks);
  useEffect(() => {
    async function getDecks() {
      const dataFromAPI = await listDecks();
      setDecks(dataFromAPI);
    }
    getDecks();
  }, []);

  return;
  <div>
    <Header />
    <CreateDeck />
    <Study />
    <button type="delete" deleteDeck />
  </div>;
}

export default Home;
