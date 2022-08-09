import React, { createContext, useState } from 'react';

type Props = {
    children: React.ReactNode;
};

type ContextProps = {
    userAuth: boolean;
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

// export const AuthContext = createContext<boolean>(false);
export const AuthContext = createContext<ContextProps>({} as ContextProps);

//AuthProviderの作成
export const AuthProvider: React.VFC<Props> = ({ children }) => {
    const [userAuth, setUserAuth] = useState(false);
    return (
        // <AuthContext.Provider value={false}>
        <AuthContext.Provider value={{ userAuth, setUserAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
