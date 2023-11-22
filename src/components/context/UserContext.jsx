import { useState, createContext } from "react";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    dissmissUser: () => {},
    successMessage: false,
    setSuccessMessage: () => {},
    
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const displayUser = (userToDisplay) => {
        setCurrentUser(userToDisplay);
        setSuccessMessage(userToDisplay);
    }

    const dissmissUser = () =>{
        setSuccessMessage("");
        setCurrentUser("")
    }

    const value = {currentUser, 
        setCurrentUser, displayUser, 
        dissmissUser, successMessage, setSuccessMessage,};

return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
) 
}
