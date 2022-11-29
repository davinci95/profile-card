import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
   return (
      <div className="footer">
         <AiFillTwitterSquare />
         <AiFillFacebook />
         <AiFillInstagram />
         <AiFillGithub />
      </div>
   );
}
