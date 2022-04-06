import { initializeApp } from 'firebase/app';

import { db } from './config';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';
import { useState } from 'react';
import { CocktailContext } from './store/store';
import { useContext } from 'react';
import { async } from '@firebase/util';
import { useEffect } from 'react';





const Chat = (props) => {

  const {userName} = useContext(CocktailContext)
const [Messages, setMessages] = useState()

const [myMessage, setMyMessage] = useState("")

const getMessages = () => {
  const q = query(collection(db, `chat${props.id}`),orderBy("date"));

onSnapshot(q, (querySnapshot) => {
  const myMessages = [];
  querySnapshot.forEach((doc) => {
    myMessages.push(doc.data())
  })
  setMessages(myMessages)
})

}
console.log(props.id);

const messageSendHandler = async () => {
  const messageObj = {
    text: myMessage,
    author:userName,
    date: serverTimestamp(),
}
console.log(messageObj);
try {
  const docRef = await addDoc(collection(db, `chat${props.id}`), messageObj)
} catch (e) {
  console.log("Error adding Document", e);
  
}


}

const outMessageChangeHandler = (e) => {
  setMyMessage(e.target.value)
  console.log(e.target.value);
}




    const firebaseConfig = {
        apiKey: "AIzaSyARO3Yy1xMWq4O_rBVkepZbROtcf6vt0yg",
        authDomain: "cocktail-app-94942.firebaseapp.com",
        projectId: "cocktail-app-94942",
        storageBucket: "cocktail-app-94942.appspot.com",
        messagingSenderId: "639601586044",
        appId: "1:639601586044:web:2203c3eac7ccdd14c2bef9",
        measurementId: "G-TD9N5B5X45",
      };

     
      initializeApp(firebaseConfig);

      useEffect(() => {
        getMessages();
      }, []);


    return (<div>{Messages && Messages.map((message, index) => (
      <div key={index} style={{ background: "blue" }}>
        <p>{message.author}</p>
        <h2>{message.text}</h2>
        <h2>Date comes here</h2>
       
        
      </div>
    )) }
    <input type="text" name="messages" placeholder='Type your message here' value={myMessage} onChange={outMessageChangeHandler} />
    <button onClick={messageSendHandler}>Send</button></div>)
    
}

export default Chat