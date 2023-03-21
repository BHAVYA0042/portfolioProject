import React, { useEffect,useState } from 'react'
import dataServiceObj from '../dataservice';
import "../css/navbar.scss";
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    const [data,setData]=useState({});
    useEffect(()=>{
        let cat="aboutMe"
        dataServiceObj.getCategory(cat).then(resData=>{
            setData(resData.data);
        })
    },[])
  return (
    <div className='navbar'>
        <section className='intro'>
            <img src={data.image} alt="" />
            <h1>{`${data.fname} ${data.lname}`}</h1>
            <p><span>{data.role}</span>{` in ${data.location}`}</p>

        </section>
        <section className='links'>
            <ul>
                <NavLink className={(nav)=>nav.isActive ? "active" : "inactive"} to="/aboutMe">About</NavLink>
                <NavLink className={(nav)=>nav.isActive ? "active" : "inactive"} to="/skills">Skills</NavLink>
                <NavLink className={(nav)=>nav.isActive ? "active" : "inactive"} to="/projects">Projects</NavLink>
                <NavLink className={(nav)=>nav.isActive ? "active" : "inactive"} to="/education">Education</NavLink>
                <NavLink className={(nav)=>nav.isActive ? "active" : "inactive"} to="/contact">Contact</NavLink>
            </ul>
        </section>
        <section className='footer'>
            <p>	&copy; Copyright &copy;2023 All rights reserved</p>
        </section>
    </div>
  )
}
