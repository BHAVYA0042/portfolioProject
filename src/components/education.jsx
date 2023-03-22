import React, { useEffect } from 'react'
import { useState } from 'react';
import dataServiceObj from "../dataservice";


export default function Education() {
  let cat = "education";
  const [dataArray,setdataArray]=useState([]);
  useEffect(()=>{
    dataServiceObj.getCategory(cat).then((resData) => {
      setdataArray(resData.data.eduData)
      console.log(resData.data.eduData)
       
      })
  },[])




  let result=dataArray.map((item)=>
  <div>
    <span>{item.courseName}</span>&nbsp;|
    <span>{item.institution}</span>&nbsp;|
    <span>{item.year}</span>&nbsp;|
    <span>{item.location}</span><br/>
    <br/>
  </div>
  
  )
  
  
  return (
    <div>
      <div>
        <span>Result:{result}</span>
        
        

      </div>

      {/* <button onClick={getEducation}>get Education</button> */}

    </div>
  )
}
