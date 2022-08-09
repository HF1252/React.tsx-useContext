import React from 'react';
import './App.css';
import { AuthProvider } from './Components/AuthContext';
import UserAuth from './Components/userAuth';

//App.tsxへAuthProvider導入
function App() {
    return (
        <AuthProvider>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <h2>useContext</h2>
                <UserAuth />
            </div>
        </AuthProvider>
    );
}

export default App;
