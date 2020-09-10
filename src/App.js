import React,  { useState, useEffect }from 'react';
import './App.css';
import { Button, Input, InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


function App() {
   const [input, setInput] = useState("");
   const [messages, setMessages] = useState([]);
   const [username, setUsername] = useState('');

   //useState = variable in react
   //useEffect = conditional statement

   useEffect(() => {
     db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))})
   }, [])

   useEffect(() => {
     //run code here
     //if its blank inside [], the code will run only once when the component loads
     setUsername(prompt('Please Enter Your Name'));

   }, [])   //condition

   console.log(messages);

   const sendMessage = (event) => {
     //all the logic to send message
     event.preventDefault();
     db.collection('messages').add({
       message:input,
       username:username,
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
     })
     setInput("");
   }



  return (
    <div className="App">
      <div>
      <h1>GapShap.Com💬</h1>
      <small>Developed by: Siddharth Singh</small>
      </div>
      <div>
      <img src="https://techengage.com/wp-content/uploads/2019/04/pulse-sms-app-768x448.jpg" width="250px" height="150px" />
      </div>
      <h2>Welcome {username} </h2>
      <form className="app__form">
      <FormControl className="app__formControl">
      <Input className="app__input" placeholder="Enter a Message" value={input} onChange={event => setInput(event.target.value)}/>
      <IconButton className="app__iconButton" disabled={!input} variant= 'contained' color='primary' type="submit"  onClick = {sendMessage}>
        <SendIcon/>
      </IconButton>
      </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} messageId={id} message={message} username={username}/>
        ))
      }
      </FlipMove>

      <div className="emptySpace">

      </div>
    </div>
  );
}

export default App;
