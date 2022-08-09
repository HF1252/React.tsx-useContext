import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const AuthButton: React.VFC = () => {
    const { userAuth, setUserAuth } = useContext(AuthContext);

    const handleSignOut = () => {
        setUserAuth(false);
    };

    const handleSignIn = () => {
        setUserAuth(true);
    };

    return (
        <React.Fragment>
            {/* {auth?.userAuth ? <button>LogOut</button> : <button>LogIn</button>} */}

            {userAuth ? (
                <button onClick={handleSignOut}>Log out</button>
            ) : (
                <button onClick={handleSignIn}>Log in</button>
            )}
        </React.Fragment>
    );
};

export default AuthButton;
