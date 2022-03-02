
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
         <div className="tab">
           <a href="home">Home</a>
         </div>

         <div className="tab">
           <a href="#about">About</a>
         </div>

         <div className="tab">
           <a href="#feature">Feature</a>
         </div>

        </div>
        <div className="viewport">
          <span>Pages are Here
          </span>
          </div>
      </div>
    </div>
  );
}

export default App;
