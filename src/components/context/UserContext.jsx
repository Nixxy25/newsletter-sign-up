import { useState, createContext } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const displayUser = (userToDisplay) => {
        setCurrentUser(userToDisplay);
    }
    const value = {currentUser, setCurrentUser, displayUser};

return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
) 
}
