import React from "react";
import { useHistory } from "react-router-dom";

function EditDeckButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("edit")}>
      Edit Deck
    </button>
  );
}
export default EditDeckButton;
