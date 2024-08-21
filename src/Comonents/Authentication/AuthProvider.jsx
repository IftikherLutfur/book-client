import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(user)
            console.log("Current User", currentUser);


        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const information = {
        user,
        signUp,
        googleLogin
    }

    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;