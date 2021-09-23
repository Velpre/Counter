import React, {useState} from "react";



function App() {
   const [counter, increseCounter] = useState(1);

  function increse(){
    increseCounter(counter+1);
   }

   function decrese(){
    increseCounter(counter-1);
   }


  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={increse}>+</button>
      <button onClick={decrese}>-</button>
    </div>
  );

  }
export default App;
