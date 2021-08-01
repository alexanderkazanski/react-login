import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authenticationActions from './actions';

const Verified = ({username}) => {
    return (
        <p>Welcome {username}.</p>
    )
}

const Authentication = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const onSubmit = () => dispatch(authenticationActions.credentialsUpdate(username, password))
    const user = useSelector(state => state.authentication.username);
    console.log(user)

    if (user.length) return <Verified username={user} />

    return (
        <div style={{ display: 'grid', justifyContent: 'center' }}>
            <h4>Login:</h4>
            <span style={{height: '50px'}}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </span>
            <span style={{height: '50px'}}>
                <input type="submit" value="Submit" onClick={onSubmit} />
            </span>
        </div>
    )
}

export default Authentication;