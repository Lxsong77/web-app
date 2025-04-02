import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;


export default function QueryParameters() {
  const [a, setA] = useState(77);
  const [b, setB] = useState(11);

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <FormControl className="mb-2"
        id="wd-query-parameter-a"
        type="number"
        defaultValue={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <FormControl className="mb-2"
        id="wd-query-parameter-b"
        type="number"
        defaultValue={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      
      <a className="btn btn-primary me-2"
        id="wd-query-parameter-add"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a className="btn btn-danger me-2"
        id="wd-query-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      
      <a className = "btn btn-success me-2"
        id="wd-query-parameter-multiply"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
    
      <a className = "btn btn-warning me-2"
        id="wd-query-parameter-divide"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}
