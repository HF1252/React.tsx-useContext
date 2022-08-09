import React from 'react';
import AuthButton from '../AuthButton';
import AuthDisplay from '../AuthDisplay';

const UserAuth: React.VFC = () => {
    return (
        <div
            style={{
                display: 'contents',
            }}
        >
            <h4>User authentication</h4>
            <AuthButton />
            <AuthDisplay />
        </div>
    );
};

export default UserAuth;
