import React, {useState} from "react";
import { usePrevious } from "./util/usePrevious";

export default function App(): JSX.Element {
    const [count, setCount] = useState ({value: 0, metadata: "count-object"});
    const prevCount = usePrevious(count);
    return (
      <div>
        <h1>
          Now: {count.value}, before: {prevCount.value}
        </h1>
        <button onClick={() => setCount(
          {value: count.value +1,
           metadata: "count-object"})}>
         Increment</button>
      </div>
    );
  }