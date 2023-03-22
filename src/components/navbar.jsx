import React, { useEffect,useState } from 'react'
import dataServiceObj from '../dataservice';

import {NavLink} from 'react-router-dom';
import DesktopNav from './desktopNav';
import Example from './hamburger';

export default function Navbar() {
    const [data,setData]=useState({});
    // var width=window.innerWidth;
    const [width,setWidth]=useState(window.innerWidth);

    useEffect(()=>{
        let cat="aboutMe";
        dataServiceObj.getCategory(cat).then(resData=>{
            setData(resData.data);
        });

        window.addEventListener("resize",()=>setWidth(window.innerWidth))
    },[]);

  return (
    <>
    {(width<=900)?
    <Example data={data}/>
    :
    <DesktopNav data={data}/>
}
    </>

  )
}
