import React from "react";
import { useHistory } from "react-router-dom";

function StudyButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("study")}>
      Study
    </button>
  );
}
export default StudyButton;
