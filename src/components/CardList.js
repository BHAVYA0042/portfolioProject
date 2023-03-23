import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import StarRating from "./StarRating";

import dataServiceObj from '../dataservice';

const text = {
    fontfamily: "source-code-pro, Menlo, Monaco, Consolas, monospace",
    textAlign : "left",
  
    letterSpacing: "3px"
   };
  
const text1 = {
     fontfamily: "'Courier New', monospace",
     textAlign : "left",
  
    };
 const text2 = {
        textAlign : "left",
        fontfamily: "'Courier New', monospace",
 
       };


    
   const rating = {
   };


const CardValue = ({ Tech, Stars }) => {

    return (

        <>
          <h6 style={text1}> {Tech} <StarRating rating={Stars} /> </h6>
           
    </>
      
    );
  };

  


  
const CardList = () => {


  const [data, setData] = useState([]);

  useEffect(()=>{
   let cat="skills";
   dataServiceObj.getCategory(cat).then(resData=>{
       setData(resData.data.skill);
       console.log(resData.data);
   });
 },[]);



  return (
   <>
   
   
    <div>
      {data.map((item, index) => (
        <CardValue key={index} Tech={item.tech} Stars={item.star} />
      ))}
   </div>

    



</> 
  );
};


export default CardList;
