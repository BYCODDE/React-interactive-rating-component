import { useState } from "react";
import "./oval.css";
import Oval from "/images/Oval.svg";
function Ovals() {
  const [submit, setSubmit] = useState(null);

  const handleClick = function (submitIndex) {
    if (submit === submitIndex) {
      setSubmit(null);
    } else {
      setSubmit(submitIndex);
    }
  };

  return (
    <section className="oval_section">
      <div onClick={()=> handleClick(1)}>
        <img src={Oval} alt="Oval1" />
        <p className="img_p">1</p>
        {/* {submit === 1 && } */}
      </div>

      <div  onClick={()=> handleClick(2)}>
        <img src={Oval} alt="Oval2" />
        <p className="img_p">2</p>
      </div>

      <div onClick={()=> handleClick(3)}>
        <img src={Oval} alt="Oval3" />
        <p className="img_p">3</p>
      </div>
      <div onClick={()=> handleClick(4)}>
        <img src={Oval} alt="Oval4" />
        <p className="img_p">4</p>
      </div>
      <div onClick={()=> handleClick(5)}>
        <img src={Oval} alt="Oval5" />
        <p className="img_p">5</p>
      </div>
    </section>
  );
}

export default Ovals;
