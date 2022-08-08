import React from "react";

function CreateDeckButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("createDeck")}>
      Create Deck
    </button>
  );
}
export default CreateDeckButton;
