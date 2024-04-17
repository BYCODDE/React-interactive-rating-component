/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./button.css";

function Button({handleClick }) {
  return (
    <section className="button_section">
      <div className="button_div" onClick={()=>[handleClick(1),handleClick(2)]} type="submit" >
        SUBMIT
      </div>
    </section>
  );
}

export default Button;
