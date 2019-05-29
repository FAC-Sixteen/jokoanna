import React from 'react';

const Input = props => {
    const [name, setName] = React.useState("");
    return (
        <form className="name-input">
            <label htmlFor="name">Name:</label>
            <input
                className="name-input__field"
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <button className="name-input__submit">Submit</button>
        </form>
    )
}

export default Input;