import React from 'react';
import { useState } from "react";
import "./App.css";
function App() {
const [Firstname, setFirstname] = useState('');
const [Lastname,setLastname ] = useState('');
const typec1=Event=>{
  setFirstname(Event.target.value);
}
const typec2=Event=>{
  setLastname (Event.target.value);
}
  return (
    <>
    <div className='one'>
    <form>
      <input type="text" placeholder='firstname' onChange={typec1}></input><br/>
      <input type="text" placeholder='lastname'  onChange={typec2} ></input>
     </form>
     <h2>FIRSTNAME:{Firstname}</h2>
     <h2>LASTNAME:{Lastname}</h2>
    </div>
     
    </>
  );
}

export default App;

