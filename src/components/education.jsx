import React, { useEffect } from 'react'
import { useState } from 'react';
import dataServiceObj from "../dataservice";
import "../css/education.css"


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
  <div className='main'>
    <h3>{item.courseName}</h3>&nbsp;<br />
    <span><i class="fa-solid fa-building-columns">&nbsp;&nbsp;</i>{item.institution}</span>&nbsp;<br />
    <span><i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;{item.year}</span>&nbsp;<br />
    <span><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{item.location}</span><br/><br />
    <br/>
    </div>
  
  )
  
  
  return (
    <div>
      <div>
        <span>{result}</span>
        
        

      </div>

      {/* <button onClick={getEducation}>get Education</button> */}

    </div>
  )
}
