import React, { useEffect } from "react";
import {apiUrl,filterData} from "./data"
import Navbar from "./components/Navbar";
import Cards from"./components/Cards"
import { useEffect } from "react";
const App =() =>{
  const  [courses,setCourses]= useState(null);
  useEffect(() =>{
const fetchData = async()=>{
  try{
const res = await fetch(apiUrl);
const data = await res.json();
//save data into a varaiable
setCourses(data.data);
  }
  catch(error){
TransformStream.error("Something went wrong");
  }
}
fetchData();
  },[]);
  return (
<div>
  <Navbar/>

  <Filter 
  filterData = {filterData}
  />
   
  <Cards/>
</div>
  );
};
export default App;