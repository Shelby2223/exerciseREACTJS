import React, { useState } from 'react';

function HookFunction(){
    const [count,setcount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setcount(count+1)}>Increment</button>
            <button onClick={() => setcount(count-1)}>Unincrement</button>
        </div>
    )
}

export default HookFunction;