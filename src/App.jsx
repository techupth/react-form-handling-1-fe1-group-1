import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState('Greeting Message');
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
          id="greeting-message" 
          type="text" 
          value={(text)}
          onChange={(event) => setText(event.target.value)}/>
      </div>

      <div className="buttons">
        <button onClick={() => setMessage(text)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
