import React from "react";
export const Det = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    console.log(firstName, lastName);

    e.target.firstName.value = "";
    e.target.lastName.value = "";
  };

  return (
    <div className="Det">
      <h1>ControlledForm</h1>
      <form onSubmit={submitHandler}>
        <input name="firstName" placeholder="firstName" required />
        <br></br>
        <input name="lastName" placeholder="lastName" required />
        <button type="submit">submit</button>
      </form>
      </div>
  );
};
