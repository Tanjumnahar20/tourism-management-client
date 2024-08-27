/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,  } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";


 export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  

  const [loading,setLoading] = useState(true)

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const login = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authInfo = {
    auth,
    createUser,
    loading,
    login
  }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;