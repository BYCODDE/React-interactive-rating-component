/* eslint-disable react/prop-types */
import Main2 from "../../components2/Main/Main";
import "./oval.css";
import Oval from "/images/Oval.svg";

function Ovals({ submit, handleClick, buttonClicked }) {
  return (
    <section className="oval_section">
      <div onClick={() => handleClick(1)}>
        <img src={Oval} alt="Oval1" />
        <p className="img_p">1</p>
        {submit === 1 && buttonClicked ? <Main2 submit={submit}></Main2> : null}
      </div>
      <div onClick={() => handleClick(2)}>
        <img src={Oval} alt="Oval2" />
        <p className="img_p">2</p>
        {submit === 2 && buttonClicked ? (
          <p>You selected {submit} out of 5</p>
        ) : null}
      </div>
      <div onClick={() => handleClick(3)}>
        <img src={Oval} alt="Oval3" />
        <p className="img_p">3</p>
        {submit === 3 && buttonClicked ? (
          <p>You selected {submit} out of 5</p>
        ) : null}
      </div>
      <div onClick={() => handleClick(4)}>
        <img src={Oval} alt="Oval4" />
        <p className="img_p">4</p>
        {submit === 4 && buttonClicked ? (
          <p>You selected {submit} out of 5</p>
        ) : null}
      </div>
      <div onClick={() => handleClick(5)}>
        <img src={Oval} alt="Oval5" />
        <p className="img_p">5</p>
        {submit === 5 && buttonClicked ? (
          <p>You selected {submit} out of 5</p>
        ) : null}
      </div>
    </section>
  );
}

export default Ovals;
