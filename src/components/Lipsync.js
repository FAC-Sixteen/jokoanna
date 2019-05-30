import React from "react";
import { getData } from "../utils/dataHelpers";

const Lipsync = props => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData().then(data => setData(data));
  }, [props.score]);

  if (!data) {
    return <h3 className="loading">Loading...</h3>;
  }

  const { id, name, artist, queens } = data;

  const checkQueen = num => event => {
    if (queens[num].won === true) {
      props.setResult("won");
      props.setScore(props.score + 1);
      console.log(queens[0].won, queens[1].won)
    } else {
      props.setResult("lost");
      props.setScore(0);
      console.log(queens[0].won, queens[1].won);
      getData().then(data => setData(data))
    }
  };

  return (
    <div className="lipsync">
      <h2 className="lipsync__song">
        {name} by {artist}
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
