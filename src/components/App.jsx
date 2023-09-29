import React from "react";
import Card from "./Card";

function App(props) {
  console.log(props);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Card(props)}
    </div>
  );
}

export default App;
