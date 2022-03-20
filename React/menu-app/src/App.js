import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Post from './component/Post'

function App() {
  return (
    <Container className='App'>
      <Post />
    </Container>
  );
}

export default App;