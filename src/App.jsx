import "./App.css";
import { useState } from "react";

function App() {
  let [Message,setMessage]=useState("Greeting Message");
  let [text,greetingtext]=useState("")
  const clickSubmit = ()=>{
    setMessage(text)
  }
  return (
    <div className="App">
      <div className="greeting-container">{Message}</div>
        <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={text} onChange={(event)=>{
          greetingtext(event.target.value)
        }}/>
      </div>

      <div className="buttons">
        <button type="submit" onClick={clickSubmit}>Update text</button>
      </div>
    </div>
  );
}

export default App;
