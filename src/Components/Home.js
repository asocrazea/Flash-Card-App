import react, { useEffect } from "react";
import CreateDeck from "./CreateDeck";
import Header from "../Layout/Comp/Header";
import {
  listDecks,
  deleteDeck,
  readDeck,
  updateDeck,
} from "../utils/api/index";
import CardView from "./CardView";
import Study from "./Study";

function home() {
  const [decks, setDecks] = useState(decks);
  useEffect(() => {
    async function getDecks() {
      const dataFromAPI = await listDecks();
      setDecks(dataFromAPI);
    }
    getDecks();
  }, []);
  // useEffect(() => {
  //   async function
  // })

  return;
  <div>
    <Header />
    <CreateDeck />
    <Study />
    <button />
  </div>;
}

export default home;
