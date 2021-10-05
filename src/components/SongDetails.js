import React from "react";
import SongList from "./SongList";

function SongDetails(props) {
    return <div style={{ marginTop: "10px" }} className="container">
    {SongList.map(function(song) {
      return <div key={song.title} style={{ marginTop: "15px" }} className="row">
          <div className="col-lg-6">
            <p>{song.title}</p>
          </div>
          <div className="col-lg-6">
            <button onClick={function() { props.onSongChange(song) }} className="btn btn-primary">Select</button>
          </div>
          <hr style={{ border: "1px solid", width: "650px" }} />
      </div>
    })}
  </div>;
}

export default SongDetails;