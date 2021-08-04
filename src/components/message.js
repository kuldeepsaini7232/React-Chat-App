import React, { useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { userContext } from '../context/context';
import './message.css';
import Send from './Send';
const Message = () => {
    const user= useContext(userContext);
    const [chats, setChats] = useState([]);//initially it is empty array
    useEffect(() => {
       
        db.collection('chats').orderBy('createdAt').onSnapshot((Snapshot) => {
            setChats(Snapshot.docs.map(doc => doc.data()));//set chats document data in state
        })
    }, [])
 
    return (
        <div className="message">
            <h3 style={{ position: 'absolute', right: '10px', top: '20px',letterSpacing:'1.1px',border:'1px solid white',padding:'8px' }}>{user.user.user.displayName}</h3>
            {chats.map(({ id, uid, text }) => {
                return <div key={id} className={`${uid === auth.currentUser.uid ? 'send' : 'rec'}`}>
                    <p>{text}</p>
                </div>
            })}
            <Send />
        </div>
    )
}
export default Message;