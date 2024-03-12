import React from "react";
import { useEffect , useState} from "react";
const Title = () => {
  const[json,setJson]=useState([]);
  useEffect(() => {
    console.log("test");
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const jsonRes = await data.json();
      console.log(json);
      setJson(jsonRes);
    } catch (err) {
      console.log("err",err);
    } finally {
      console.log("final");
    }
  }

  // const fetchData=()=>{
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => console.log(json))
  //       .catch((err) => console.log(err))
  //       .finally(()=>console.log("final"));
  // }
 
  return <div>
    {JSON.stringify(json)}
    JAIKUMAR </div>;
};
export default Title;
