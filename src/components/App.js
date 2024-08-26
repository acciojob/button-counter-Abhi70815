
import React,{useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);
  function handleBtn(){
    setCount(count+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={handleBtn}>Click me</button>
    </div>
  )
}

export default App
