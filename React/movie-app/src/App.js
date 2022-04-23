import React,{useState} from 'react';
import './App.scss'

function App() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      hello
      <button onClick={(e)=>setQuantity(Number(quantity)-1)}>Decreament</button>
      <input type='text' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
      <button onClick={(e)=>setQuantity(Number(quantity)+1)}>Increment</button>
     
    </div>
  );
}

export default App;
