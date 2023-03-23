import dataServiceObj from "../dataservice";
import { useState } from "react";
import "../css/about.scss";
export default function About() {
  const [imgUrl, setImgUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loc, setLocation] = useState("");
  const [summ, setSummary] = useState("");
  var cat = "aboutMe";
  dataServiceObj.getCategory(cat).then((resData) => {
    // console.log(resData.data.image)
    setImgUrl(resData.data.image);
    setFirstName(resData.data.fname);
    setLastName(resData.data.lname);
    setLocation(resData.data.location);
    setSummary(resData.data.summary);
  });

  return (
    <div>
      <div className="wrap">

        <div id="container1">
          <div id="photo">
            <img width="50%" src={imgUrl} alt="" />
          </div>
          <div id="location">
            <h2>{loc}</h2>
            </div>
            </div>
        <div id="container2">
        <div id="title">
            <h1>
              {firstName}&nbsp;{lastName}
            </h1>
          </div> 
            <div id="summary"> <p>{summ}</p>
                </div>
          </div>
      </div>
    </div>
  );
}
