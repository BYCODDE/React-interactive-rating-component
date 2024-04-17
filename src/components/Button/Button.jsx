/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./button.css";

function Button({ handleMainButtonClick }) {
  return (
    <section className="button_section">
      <div className="button_div" type="submit" onClick={handleMainButtonClick}>
        SUBMIT
      </div>
    </section>
  );
}

export default Button;