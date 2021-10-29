import { useRef, useState } from "react";
import useRandomJokeGenerator from "./useRandomJokeGenerator";
function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //custom hook useRandomJokeGenerator
  const joke = useRandomJokeGenerator(firstName, lastName);
  const generateJokes = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  return (
    <div className="App">
      <center>
        <h1 style={{ color: "maroon" }}>Jokes Generator</h1>

        <h3 style={{ color: "green" }}>{joke}</h3>
        <form>
          <input placeholder="First Name" ref={firstNameRef} />
          <input placeholder="Last Name" ref={lastNameRef} />
          <button onClick={generateJokes}>Generate Jokes</button>
        </form>
      </center>
    </div>
  );
}

export default App;
