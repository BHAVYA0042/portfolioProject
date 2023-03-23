import React from 'react';
import dataServiceObj from '../dataservice';
import { useEffect,useState} from 'react';
import "../css/contact.scss";

export default function Contact() {
  const [data,setData]=useState({});
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    body:""
  });
  const [mailString,setMailString]=useState("");
  function handleChange(e){
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    })
    setMailString(`mailto:${data.email}?subject=${formData.subject}&body=${formData.body}`)
  }
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
          <a href={`mailto:${data.email}`}>
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
          <input type="text" placeholder='Name' value={formData.name} name="name" onChange={handleChange}/>
          <input type="text" placeholder='Email' value={formData.email} name="email" onChange={handleChange}/>
          <input type="text" placeholder='Subject' value={formData.subject} name="subject" onChange={handleChange}/>
          <textarea placeholder='Message' value={formData.body} name="body" onChange={handleChange}/>
          <a href={mailString}>Send Message</a>

        </form>
      </div>
    </div>
  )
}
