/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";


 export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  

  const [loading,setLoading] = useState(true);
  const [user, setUser] = useState();
  const axiosPublic = useAxiosPublic();
  

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const login = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  
  const logOut =()=>{
    setLoading(true)
    return signOut(auth);
}

  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('currentuser',currentUser);
        setUser(currentUser)
        
        if(currentUser){
          const userInfo ={
              email: currentUser.email
          }
          axiosPublic.post('/jwt', userInfo)
           .then(res=>{
              if(res.data.token){
                console.log('token data imn auth', res.data.token);
                  localStorage.setItem('access-token', res.data.token)
              }
           })
        }

        else{
          //  todo:remove token
          localStorage.removeItem('access-token')
        }
        setLoading(false);
      });
      return ()=>{
          return unsubscribe();
      }

      
  },[axiosPublic])

  const authInfo = {
    auth,
    createUser,
    loading,
    login,
    user,
    logOut
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
