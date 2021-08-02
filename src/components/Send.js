import React, { useState } from 'react';
import {db,auth} from '../firebase/firebase';
import firebase from 'firebase';
import './footer.css';


const Send=()=>{
    const [text,setText]=useState("");
    const send=(e)=>{
     e.preventDefault();//stop default behaviour
     const {uid}=auth.currentUser;
     db.collection('chats').add({
         text,
         uid,
         createdAt:firebase.firestore.FieldValue.serverTimestamp()
     })
     setText("");
    }
    return(
    <div className="send">
        <form>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={send}>Send</button>
        </form>
    </div>
    )
}

export default Send;