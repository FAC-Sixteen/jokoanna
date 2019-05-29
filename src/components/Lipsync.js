import React from 'react';

const Lipsync = props => {
    const [data, setData] = React.useState({
        id: 1,
        name: "Supermodel",
        artist: "RuPaul",
        episodeId: 8,
        queens: [
            {
                id: 1,
                name: "Victoria 'Porkchop' Parker",
                won: false
            },
            {
                id: 3,
                name: "Akashia",
                won: true
            }
        ]
    });

    // randomiser function

    // fetch request

    // extract required variables and render on page




    return (
        <div className="lipsync">
            <h2 className="lipsync__song"> {data.name} - {data.artist} </h2>
            <div className="lipsync__queens">
                <button className="lipsync__queens--button queen--0" > {data.queens[0].name} </button>
                <p className="lipsync__vs"> VS </p>
                <button className="lipsync__queens--button queen--1" > {data.queens[1].name} </button>
            </div>
        </div>
    )
}

export default Lipsync;