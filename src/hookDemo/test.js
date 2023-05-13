import React, { useState } from 'react';

function Test() {
    const [color, setColor] = useState('')
    return (
        <div>
            <img src={color}  style={{height: "100px", width: '100px'}}></img>
            <button type='button' onClick={() => setColor("https://znews-photo.zingcdn.me/w960/Uploaded/mdf_eioxrd/2021_07_06/1q.jpg")}>Change to Image 1</button>
            <button onClick={() => setColor("https://znews-photo.zingcdn.me/w960/Uploaded/mdf_eioxrd/2021_07_06/2.jpg")}>Change to Image 2</button>
        </div>
    )
}

export default Test;
