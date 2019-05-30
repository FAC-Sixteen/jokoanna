import React from 'react';

const Input = props => {
    const [user, setUser] = React.useState('');
    const handleInput = event => setUser(event.target.value)
    return (
        <form className="name-input">
            <label htmlFor="name">Name:</label>
            <input
                className="name-input__field"
                type="text"
                id="name"
                placeholder="Enter your name"
                value={user}
                onChange={handleInput}
            />
            <button className="name-input__submit"
            type='submit'
            onClick={() => props.setName(user)}
            >Submit</button>
        </form>
    )
}

export default Input;