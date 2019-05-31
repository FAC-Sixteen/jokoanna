import React from 'react';
import './Message.css'

const Message = (props) => {
	const { result } = props;
    let text = null;
	if (result === 'won') {
		text = "Condragulations! You've got a point!";
	} else if (result === 'lost') {
		text = "I'm sorry my dear, but your score is back to 0.";
	} else { text = null }

	return (
		<div className="message">
			<p>{text}</p>
		</div>
	);
};

export default Message;
