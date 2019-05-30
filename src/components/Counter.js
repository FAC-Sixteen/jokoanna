import React from 'react';

const Counter = props => {
    


    return (
<section className="result">
<p className="result__name">Name: {props.name}</p>
<p className="result__counter">Score: {props.score}</p>
</section>
    )
};

export default Counter;