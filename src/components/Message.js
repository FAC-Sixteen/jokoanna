import React from 'react';
import './Message.css'

const Message = (props) => {
    let text = null;
	if (props.result === 'won') {
		text = "Condragulations! You've got a point!";
	} else if (props.result === 'lost') {
		text = "I'm sorry my dear, but your score is back to 0.";
	} else { text = null }

	return (
		<div className="message">
			<p>{text}</p>
		</div>
	);
};

export default Message;
