import { useState } from "react";


function ExampleComponent({ data: { data } }) {
  // const counter = 0
  const [counter, setCounter] = useState(0);
  
  // const {data: {data}} = props;

  // const data =  props.data.data

  return (
    <div
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      Example Component {counter}
      <div id="counter"></div>
    </div>
  );
}

export { ExampleComponent };

