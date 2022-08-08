import React from "react";

function EditDeckButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("edit")}>
      Edit Deck
    </button>
  );
}
