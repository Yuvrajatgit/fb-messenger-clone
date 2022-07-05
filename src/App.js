import React, {useState, useEffect} from 'react';
import './App.css';
import { FormControl, InputLabel, Input, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import SendIcon from '@mui/icons-material/Send';

function App() {

  const[messages,setMessages] = useState([]);
  const[input,setInput] = useState('');
  const[username,setUsername] = useState('');

  useEffect(()=>{
   db.collection('messages')
   .orderBy('timestamp','desc')
   .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
   })
  },[]);

  useEffect(()=>{
    setUsername(prompt('Hey before we begin, whats your name?'))
  },[])

  const sendMessage = (e)=>{
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
       <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'/>
       <h1>Facebook Messenger</h1>
       <h2>Welcome {username}</h2>
       <form className='app__form'>
        <FormControl className='app__formcontrol'>
           <Input className='app__input' placeholder='Enter a message...' value={input} autoFocus onChange={(e) => setInput(e.target.value)}/>
           <IconButton className='app__iconB' disabled={!input} type='submit' variant='contained' onClick={sendMessage}><SendIcon/></IconButton>
        </FormControl>
       </form>
       <FlipMove>
       {messages.map(({id,message}) => (<Message key={id} username={username} message={message}/>))}
       </FlipMove>
    </div>
  );
}

export default App;
