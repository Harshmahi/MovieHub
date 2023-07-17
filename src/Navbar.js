import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import  {signInWithPopup} from "./firebase/auth";
// import {auth , provider} from './firebase';

function Navbar() {
  const [show, handleShow] = useState(false); 
  const [image, setImage] = useState("https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png")
 
  // const signInWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // console.log(result.user);
  //       setImage(result.user.photoURL)
  //       handleClick(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
//   console.log(props)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="img_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
      ></img>

      
        <img
          className="profile_logo"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="netflix profile logo"
        />
      
    </div>
  );
}

export default Navbar;