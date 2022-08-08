import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("createDeck")}>
      Create Deck
    </button>
  );
}
export default CreateDeckButton;
