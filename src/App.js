import logo from './logo.svg';
import './App.css';

function App() {


  function changeHandler(event)
      {
        //  console.log(event.target.value);
        console.log(event.target); 
      }

  return (
    <div className="App">
  
      <form>
        <input
        type="text"
        placeholder="Enter your Name"
        onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default App;
