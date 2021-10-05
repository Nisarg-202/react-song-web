import React, { useState } from "react";
import SongDetails from "./SongDetails";

function App() {

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

function onHandleChange(song) {
    setTitle(song.title);
    setDuration(song.duration);
}

  return <div className="row">
      <div className="col-lg-6">
      <SongDetails onSongChange={onHandleChange} />
      </div>
      <div style={{ paddingLeft: "200px" }} className="col-lg-6">
      <h1>Song Details</h1>
      <p>{title}</p>
      <p>{duration}</p>
      </div>
  </div>;
}

export default App;
