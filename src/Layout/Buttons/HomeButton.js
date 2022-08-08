import React from "react";

function HomeButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("/")}>
      Home
    </button>
  );
}
export default HomeButton;
