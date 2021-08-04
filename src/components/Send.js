import React, { useState } from 'react';
import { db, auth } from '../firebase/firebase';
import firebase from 'firebase';
import './footer.css';


const Send = () => {
    const [text, setText] = useState("");//initially state is empty
    const send = (e) => {
        e.preventDefault();//stop default behaviour
        db.collection('chats').add({
            text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setText("");//set state to empty
    }
    return (
        <div className="send">
            <form>
                <input type="text" placeholder="Enter Your Msg Here" value={text} onChange={e => setText(e.target.value)} />
                <button onClick={send}>Send</button>
            </form>
        </div>
    )
}




export default Send;