import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/navbar.scss";

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i onClick={handleShow} class="bi bi-list hamburger"></i>

      <Offcanvas show={show} onHide={handleClose}>

        <Offcanvas.Header closeButton/>
        <section className='intro'>
          <img src={props.data.image} alt="" />
          <h1>{`${props.data.fname} ${props.data.lname}`}</h1>
          <p><span>{props.data.role}</span>{` in ${props.data.location}`}</p>
        </section>
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default Example;

