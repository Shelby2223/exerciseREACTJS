import React, { useState } from 'react';

const LoginForm = ({ handleSumit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className='App'>
                <form onSubmit={handleSumit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>submit</button>
                </form>
                <h1>{email}</h1>
                <h1>{password}</h1>

        </div>
    )
}

export default LoginForm;
