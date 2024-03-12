import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
export const Details = () => {
  console.log(uuidv4());
  const firstName = useRef(null);
  const secondName = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    let first = firstName.current.value;
    let second = secondName.current.value;
    console.log(first, second);
    firstName.current.value = "";
    secondName.current.value = "";
  };

  return (
    <div className="Details">
      <h1>UncontrolledForm</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <input ref={firstName} placeholder="firstName" required />
        <br />
        <input ref={secondName} placeholder="secondName" required />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
