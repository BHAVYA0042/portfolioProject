import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.scss";

export default function DesktopNav(props) {
    console.log(props);
  return (
    <div className='navbar'>
    <section className='intro'>
        <img src={props.data.image} alt="" />
        <h1>{`${props.data.fname} ${props.data.lname}`}</h1>
        <p><span>{props.data.role}</span>{` in ${props.data.location}`}</p>

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
