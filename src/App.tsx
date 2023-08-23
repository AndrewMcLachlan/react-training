import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  const [lastClickTime, setLastClickTime] = useState<Date | undefined>(undefined);
  const [lastClick, setLastClick] = useState<number | undefined>(undefined);

  useEffect(() => {

    // If the button has not been clicked, there is not last click time
    if (count === 0) return;

    const now = new Date();

    // If there is a last click time, calculate the difference
    if (lastClickTime) {
      const milliseconds = Math.floor((now.getTime() - lastClickTime.getTime()));
      setLastClick(milliseconds);
    }

    setLastClickTime(now);

  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          <p>
            Milliseconds since last click: {lastClick ?? "-"}
          </p>
        <Form label="My Form">
          <h4>A custom child</h4>
        </Form>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

/// This function shows some useful to know features of TypeScript
function UsefulToKnow() {

  /// Arrays and the spread operator

  // Create an empty array
  const arr: number[] = [];
  arr.push(1);

  // Using the spread operator to create a new array
  const arr2 = [-1, 0, ...arr, 2];
  const arr3 = [...arr];

  /// Union types

  // Declare a union type
  let whoKnows: string | number[] = arr;

  // Check the type
  if (Array.isArray(whoKnows)) {
    console.debug("whoKnows is an array");
  }

  whoKnows = "one";

  if (typeof whoKnows === "string") {
    console.debug("whoKnows is a string");
  }

  // Union type with literal types
  type SimpleEnum = "one" | "two" | "three";

  const simpleEnum: SimpleEnum = "one";

  // simeplEnum is really still a string
  const asString: string = simpleEnum;

  console.debug(asString);

  // Create an object
  const myObject: MyObject = {
    id: 1,
    name: "My Object"
  };

  // Destructuring
  const { id, name } = myObject;

  // Destructuring with renaming
  const { id: myId, name: myName } = myObject;

  // Using the spread operator to create a new object
  const myObject2 = { ...myObject, id: 2 };
}

// Defines an interface for an object
// An interface is not a class and is not compiled to JavaScript
interface MyObject {
  id: number;
  name: string;
}