import React, { useEffect, useState,useContext } from 'react';
import './App.css';
import firebase from 'firebase';
import Login from './components/Login';
import {userContext} from './context/context';
import Message from './components/message';

const App=()=>{
  const [user,setUser]=useState(null);//it is a context
  return(
    <userContext.Provider value={{user,setUser}}>
    <div className="app">
      {console.log(user)}
    <h1 style={{padding:'16px',display:'inline-block'}}>Chatt App</h1>
    {user?<Message/>:<Login/>}
    </div>
    </userContext.Provider>
  )
}


export default App;