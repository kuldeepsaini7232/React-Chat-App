import  React,{useContext} from 'react';
import firebase from 'firebase';
import {auth} from '../firebase/firebase';
import { userContext } from '../context/context';
import './login.css';



const Login=()=>{
    const context=useContext(userContext);
    const start=()=>{
        const provider=new firebase.auth.GoogleAuthProvider;
       auth.signInWithPopup(provider)
       .then(res=>{
          context.setUser(res)
       })
       }
    return(
     <div className="login">
         <button onClick={start}>Login With Google</button>
     </div>
    )
}

export default Login;