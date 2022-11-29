import React from "react";
import CatImg from "../../src/images/cat.jpg";
import { HiMail } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

export default function Info() {
   return (
      <>
         <div>
            <img src={CatImg} className="info__avatar"></img>
         </div>
         <div className="info">
            <h1 className="info__name">Võ Đình Văn</h1>
            <h3 className="info__job">Frontend Developer</h3>
            <p className="info__project">
               <a href="https://vinci95.netlify.app/">vinci95.netlify.app</a>
            </p>
            <div className="info__socials">
               <span className="info__button">
                  <a
                     href="vodinhvan200495@gmail.com"
                     style={{ color: "black" }}
                  >
                     <HiMail className="infor__icon" />
                     <p>Email</p>
                  </a>
               </span>
               <span className="info__button">
                  <a href="https://github.com/davinci95">
                     <AiFillGithub className="infor__icon" />
                     <p> Github</p>
                  </a>
               </span>
            </div>
         </div>
      </>
   );
}
