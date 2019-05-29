import React from 'react';
import { getData } from '../utils/dataHelpers'

const Lipsync = props => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        getData()
            .then(data => setData(data))
    }, []);
    if (!data) {
        return <h3 className="loading">Loading...</h3>
    }
    const {
        id,
        name,
        artist,
        queens
    } = data
    // randomiser function

    // fetch request

    // extract required variables and render on page

    return (
        <div className="lipsync">
            <h2 className="lipsync__song"> {name} - {artist} </h2>
            <div className="lipsync__queens">
                <button className="lipsync__queens--button queen--0" > {queens[0].name} </button>
                <p className="lipsync__vs"> VS </p>
                <button className="lipsync__queens--button queen--1" > {queens[1].name} </button>
            </div>
        </div>
    )
}

export default Lipsync;