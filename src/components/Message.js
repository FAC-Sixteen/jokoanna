import React from 'react';

const Message = props => {
    return (
        <div className='message'>
            <p>{props.result==='won' ? 'Condragulations! You\'ve got a point!' : 'I\'m sorry my dear, but your score is back to 0.'}</p>
        </div>
    )
}

export default Message;