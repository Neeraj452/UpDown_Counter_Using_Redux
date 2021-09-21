import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber  } from "./actions/index";

const App =()=> {
 
  const myState = useSelector((store)=> store.changeTheNumber )
  const dispatch = useDispatch();
  return (
    <>
    <div className="header">
      <h1>Increment / Decrement</h1>
      <h4>using React and Redux </h4>
    </div>
    <div className="updown">
      
      <button onClick={()=> dispatch(decNumber())}>-</button>

    
      <input type="text" name=" second_Number" value={myState}/>
    
      <button onClick={()=> dispatch(incNumber())}>+</button>
    </div>
    </>
  )
}

export default App;