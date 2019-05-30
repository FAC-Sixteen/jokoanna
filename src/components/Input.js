import React from 'react';

const Input = props => {

    return (
        <form className="name-input">
            <label htmlFor="name">Name:</label>
            <input
                className="name-input__field"
                type="text"
                id="name"
                placeholder="Enter your name"
                value={props.name}
                onChange={event => props.setName(event.target.value)}
            />
            <button className="name-input__submit">Submit</button>
        </form>
    )
}

export default Input;