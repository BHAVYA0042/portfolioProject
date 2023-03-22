import React from 'react';
import dataServiceObj from '../dataservice';
import { useEffect,useState} from 'react';
import "../css/contact.scss";

export default function Contact() {
  const [data,setData]=useState({});


  useEffect(()=>{
      let cat="contactMe";
      dataServiceObj.getCategory(cat).then(resData=>{
          setData(resData.data);
      });
  },[]);
  return (
    <div className='contact'>
      <div className="contact_left">
        <section>
          <a href="mailto:">
            <i class="bi bi-envelope"></i>
          </a>
          <p>{data.email}</p>
        </section>
        <section>
          <a href={data.dpn}>
            <i class="bi bi-people-fill"></i>
          </a>
          <p>DPN Profile</p>
        </section>
        <section>
          <a href={data.linkedin}>
          <i class="bi bi-linkedin"></i>
          </a>
          <p>LinkedIn</p>
        </section>
      </div>
      <div className='contact_right'>
        <form>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Subject'/>
          <textarea placeholder='Message'/>
          <button>Send Message</button>

        </form>
      </div>
    </div>
  )
}
