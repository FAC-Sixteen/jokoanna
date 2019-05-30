import React from 'react';

const Input = props => {
    const [user, setUser] = React.useState('');
    const handleInput = event => setUser(event.target.value);
    return (
        <form className="name-input" onSubmit={() => props.setName(user)}>
            <label htmlFor="name">Name:
            <input
                className="name-input__field"
                type="text"
                id="name"
                placeholder="Enter your name"
                value={user}
                onChange={handleInput}
            />
            </label>
            <input className="name-input__submit"
            type='submit' value='Submit'
            />
        </form>
    )
}

export default Input;