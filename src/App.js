import React from "react";
import Info from "./component/Info";
import About from "./component/About";
import Interests from "./component/Interests";
import Footer from "./component/Footer";

export default function App() {
   return (
      <div className="container">
         <Info />
         <About />
         {/* <Interests /> */}
         <Footer />
      </div>
   );
}
