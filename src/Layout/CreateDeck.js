import React, { useState } from "react";

function CreateDeck() {
  const initialFormState = {
    id: "",
    front: "",
    back: "",
    deckId: "",
  };
  const [formData, SetFormData] = useState({ ...initialFormState });
}
export default CreateDeck;
