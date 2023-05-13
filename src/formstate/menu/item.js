import React, { Component } from 'react';

function items(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default items;