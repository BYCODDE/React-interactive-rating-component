// import { useState } from "react";
import "./button.css";

function Button() {
  // const [submit, setSubmit] = useState(false);
  const submitHandler = function () {
    // TODO: submit-is dacheraze true unda iyos magis logica sheidzleba
  };

  return (
    <section className="button_section">
      <div className="button_div" onClick={submitHandler}>
        SUBMIT
      </div>
    </section>
  );
}

export default Button;
