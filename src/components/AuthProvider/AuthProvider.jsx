/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth,  } from "firebase/auth";
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

  // const SignUp = (auth) =>{
  //   return signInWithEmailAndPassword(auth)
  // }

  const authInfo = {
    auth,
    createUser,
    loading
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