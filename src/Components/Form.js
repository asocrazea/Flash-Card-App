import {
  listDecks,
  deleteDeck,
  readDeck,
  updateDeck,
} from "../utils/api/index";

function form() {
  return (
    <div>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={FormData.name}
      />
      <textarea type="text" name="" />
    </div>
  );
}
