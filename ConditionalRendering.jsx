import React from "react";
import { UserAddress } from "./UserAddress";
import { UserDetails } from "./UserDetails";
const ConditionalRendering = () => {
  let userData = "UserDetails";
  if (userData === "UserDetails") {
    return (
      <>
        <UserDetails />
        <UserAddress />
      </>
    );
  } else {
    return <UserAddress />;
  }
  // return(
  // <div>{userData === "UserDetails" ?

  // <p>UserDetails</p>:<p>UserAddress</p>
  //  }</div>

  // );
};
export default ConditionalRendering;
