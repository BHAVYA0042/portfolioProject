import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataServiceObj from '../dataservice.js';

import Table from 'react-bootstrap/Table';

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProgressBar from 'react-bootstrap/ProgressBar';

import axios from 'axios';

import { useState, useEffect } from 'react';

import StarRating from "./StarRating";

 

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

  


  
const General = () => {


    const [data, setData] = useState([]);
    useEffect(()=>{
      let cat="skills";
      dataServiceObj.getCategory(cat).then(resData=>{
        console.log(resData.data.general);
          setData(resData.data.general);
          console.log(data);
      });
  },[]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch('http://localhost:3001/general');
    //     const json = await response.json();
    //     setData(json);
    //   };
    //   fetchData();
    // }, []);




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


export default General;
