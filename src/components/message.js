import React,{useContext, useEffect, useState}  from 'react';
import {auth, db} from '../firebase/firebase';
import './message.css';
import Send from './Send';

const Message=()=>{
    const [chats,setChats]=useState([]);
    useEffect(()=>{
    db.collection('chats').onSnapshot((Snapshot)=>{
       setChats(Snapshot.docs.map(doc=>doc.data()))
    })
    },[])
    return(
        <div className="message">
            {chats.map(({id,uid,text})=>{
                return <div key={id} className={`${  uid===auth.currentUser.uid?'send':'rec'}`}>
                    <p>{text}</p>
                    </div>
            })}
                <Send/>
                    </div>
    )
}
export default Message;