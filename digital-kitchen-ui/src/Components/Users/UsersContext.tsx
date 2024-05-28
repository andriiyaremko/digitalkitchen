import React, {createContext, ReactNode, useState} from "react";
import {User} from "../../Api/UserApi";

export type UsersContextType = {
    users: User[],
    setUsers: (users:User[]) => void
}

const UsersContext = createContext<UsersContextType>(undefined!);

export const UsersProvider = ({children}: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);

    return (
        <UsersContext.Provider value={{users, setUsers}}>{children}</UsersContext.Provider>
    );
}

export default UsersContext;
