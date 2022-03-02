
import './App.css';
import NavbarBlock from './component/NavbarBlock';
import Product from './component/Product';


function App() {
  return (
    <div className="App">
      <NavbarBlock />
      <h1 className='m-10'>Flipkart</h1>
      <Product />
    </div>
  );
}

export default App;
