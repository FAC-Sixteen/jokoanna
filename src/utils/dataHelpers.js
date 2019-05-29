import React from 'react';

export const randomiser = () => {
    //ids between 1 and 134
    const id = Math.floor(Math.random() * (135 - 1) + 1);
    getData(id);
}

export const checkResponse = (response) => {
    if (response.status !== 200) {
        console.log(`Error with the request! ${response.status}`);
        return;
    }
    return response.json();
};

export const getData = (id) => {
    return fetch(`http://www.nokeynoshade.party/api/lipsyncs/${id}`)
        .then(checkResponse)
        .catch(err => {
            throw new Error(`fetch getData failed ${err}`);
        });
};