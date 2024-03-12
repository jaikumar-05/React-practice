import React from "react";
import { useState } from "react";
import { UserDetails } from "./UserDetails";
const Product = () => {
  const [arr, setArr] = useState(true);

  const updateArr = () => {
    setArr((val)=>!val);
  
  };
  return (
    <>
     {/* {JSON.stringify(arr)} */}
      <button onClick={() => updateArr()}>Update</button>
      <br />
      {arr?<UserDetails/>:"not welcome jai"}
    </>
  );
};

export default Product;
