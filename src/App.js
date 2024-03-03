import { useEffect, useState } from 'react';
import './App.css';
import Tooltip from './Tooltip';
function App() {
  const [position, setPosition] =useState("top");
  useEffect(()=>{
    console.log(position);
  },[position])

  return (
    <div className="App">
        <select onChange={(e)=>setPosition(e.target.value)}>
          <option value="top">Top</option>
          <option value="left">Left</option>
          <option value="bottom">Bottom</option>
          <option value="right">Right</option>
        </select>
        <Tooltip position={position}/>
    </div>
  );
}

export default App;
