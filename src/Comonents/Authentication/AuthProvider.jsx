import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext } from "react";
import app from "../../../firebase";

export const AuthContext = createContext('')
const AuthProvider = ({children}) => {

    const auth = getAuth(app)
    const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    }

    const information ={
         signUp 
    }

    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;