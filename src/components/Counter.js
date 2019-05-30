import React from 'react';
import './Counter.css';

const Counter = props => {
    


    return (
<section className="result">
<p className="result__name"><span className="results__variable">Name:</span> {props.name}</p>
<p className="result__counter"><span className="results__variable">Score:</span> {props.score}</p>
</section>
    )
};

export default Counter;