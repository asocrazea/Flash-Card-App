import react, { useEffect } from "react";
import CreateDeck from "./CreateDeck";
import NotFound from "./NotFound";
import DeckList from "./DeckList";
import Header from "../Layout/Comp/Header";

function home() {
  const [decks, setDecks] = useState(DeckData);
  useEffect(() => {
    async function getDecks()
  })
  const deleteDeck = (indexToDelete) => {
    setDecks((curDeck) => curDeck.filter((post, index) => index !== indexToDelete))
  }

  return;
  <div>
    <Header />
  </div>;
}

export default home;
