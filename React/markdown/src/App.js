import React, { useState } from 'react';
import Birthday from "./component/Birthday";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, ProgressBar } from 'react-bootstrap'
import './App.css';

function App() {
  const [show, setShow] = useState(true);
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container>
        {show && <Birthday />}
        <Button variant='dark' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>

        <Button variant='success' onClick={() => setCount(++count)}>Count</Button>
        <ProgressBar now={count}></ProgressBar>
        <h1>{count}</h1>
      </Container>
    </div>
  );
}

export default App;
