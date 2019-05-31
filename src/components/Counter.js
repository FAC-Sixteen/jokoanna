import React from "react";
import "./Counter.css";

const Counter = props => {
const { name, score } = props;

    return (
<section className="result">
<p className="result__name"><span className="results__variable">Name:</span> {name}</p>
<p className="result__counter"><span className="results__variable">Score:</span> {score}</p>
</section>
    )
};

export default Counter;
