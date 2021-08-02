import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from 'firebase';
import Login from './components/Login';
import {userContext} from './context/context';
import Message from './components/message';


const App=()=>{
  const [user,setUser]=useState(null);
  return(
    <userContext.Provider value={{user,setUser}}>
    <div className="app">
    <h1 style={{padding:'16px'}}>Chat App</h1>
    {user?<Message/>:<Login/>}
    </div>
    </userContext.Provider>
  )
}


export default App;