import React from "react";
import { useState } from "react";
  const TodoApp = () => {
  const [obj, setObj] = useState({
    firstname: "",
    lastname: "",
  });
  const changeHandler=(e)=>{
    // console.log(obj);
  setObj({...obj,[e.target.name]:e.target.value});

  }
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(obj);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          FirstName:
          <input
            name="firstname"
            value={obj.firstname}
            onChange={changeHandler}
          />
        </div>
        <div>
        LastName
       
          <input
            name="lastname"
            value={obj.lastname}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default TodoApp;