import React from "react";
import { getData } from "../utils/dataHelpers";

const Lipsync = props => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    getData().then(data => setData(data));
  }, []);
  if (!data) {
    return <h3 className="loading">Loading...</h3>;
  }
  const { id, name, artist, queens } = data;

  const checkQueen = num => event => {
    return queens[num].won === true
      ? console.log("YAY, YOU'RE RIGHT!")
      : console.log("OOPSIE, YOU LOST!");
  };

  return (
    <div className="lipsync">
      <h2 className="lipsync__song">
        {" "}
        {name} by {artist}{" "}
      </h2>
      <div className="lipsync__queens">
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
