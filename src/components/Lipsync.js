import React from "react";
import { getData } from "../utils/dataHelpers";
import "./Lipsync.css";

const Lipsync = props => {
  const { setResult, setScore, score } = props;
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData().then(data => setData(data));
  }, []);

  if (!data) {
    return <h3 className="loading">Loading...</h3>;
  }

  const { name, artist, queens } = data;

  const checkQueen = num => event => {
    if (queens[num].won === true) {
      setResult("won");
      setScore(score + 1);
      getData().then(data => setData(data));
    } else {
      setResult("lost");
      setScore(0);
      getData().then(data => setData(data));
    }
  };

  return (
    <div className="lipsync">
      <h2 className="lipsync__song">
        <span className="song-name">{name}</span>
        <span className="artist-name">{artist}</span>
      </h2>
      <div className="lipsync__queens">
        <h3 className="lipsync__question">
          Which Queen survived this lipsync?
        </h3>
        <button
          className="lipsync__queens--button queen--0"
          onClick={checkQueen(0)}
        >
          {queens[0].name}
        </button>
        <p className="lipsync__vs"> VS </p>
        <button
          className="lipsync__queens--button queen--1"
          onClick={checkQueen(1)}
        >
          {queens[1].name}
        </button>
      </div>
    </div>
  );
};

export default Lipsync;
