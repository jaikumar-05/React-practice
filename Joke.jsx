import React from "react";
import { useState, useEffect } from "react";
const Joke = () => {
  const [json, setJson] = useState({});
  useEffect(() => {
    fetchjoke();
  },[]);
  const fetchjoke = async () => {
    try {
        const data = await fetch("https://api.chucknorris.io/jokes/random");
        const jsonRes = await data.json();
        console.log(json);
        setJson(jsonRes);
      } catch (err) {
        console.log("err");
      } finally {
        console.log("final");
      }
  };

  return (
    <div>
      <h1>Random joke Generator</h1>
      <h1>{json.value}</h1>
      <button onClick={fetchjoke}> Refresh Joke</button>
    </div>
  );
};
export default Joke;
