import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const AuthDisplay: React.VFC = () => {
    const auth = useContext(AuthContext);
    return <div>{auth?.userAuth ? <p>Logging in</p> : <p>Logging out</p>}</div>;
};

export default AuthDisplay;
