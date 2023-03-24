import React, { useEffect } from 'react'
import { useState } from 'react';
import dataServiceObj from "../dataservice";
export default function Project() {
  let cat = "projects";
  const [dataArray1,setdataArray]=useState([]);
  useEffect(()=>{
    dataServiceObj.getCategory(cat).then((resData) => {
      setdataArray(resData.data.skillData)
      console.log(resData.data.skillData)

      })

  },[])







  let result1=dataArray1.map((item)=>

  <div>

    <span>Name:{item.name}</span><br/>

    <br/>

    <span>Role:{item.role}</span><br/>

    <br/>

    <span>Tech:{item.tech[0]}</span>;

    <span>{item.tech[1]}</span>;

    <span>{item.tech[2]}</span>&nbsp;

    <br/>

    <br/>

    <br/>

    <br/>

  </div>

 

  )

 

 

  return (

    <div>

      <div>

        <span>Projects:{result1}</span>

       

       




      </div>




     




    </div>

  )

}