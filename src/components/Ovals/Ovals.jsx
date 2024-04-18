/* eslint-disable react/prop-types */
import Main2 from "../../components2/Main/Main2";
import "./oval.css";
import Oval from "/images/Oval.svg";

function Ovals({ submit, handleClick, buttonClicked }) {
  return (
    <section className="oval_section">
      <div className="oval_div" onClick={() => handleClick(1)}>
        <p className="img_p">1</p>
        {submit === 1 && buttonClicked ? <Main2 submit={submit}></Main2> : null}
      </div>
      <div className="oval_div" onClick={() => handleClick(2)}>
        <p className="img_p">2</p>
        {submit === 2 && buttonClicked ? <Main2 submit={submit}></Main2> : null}
      </div>
      <div className="oval_div" onClick={() => handleClick(3)}>
        <p className="img_p">3</p>
        {submit === 3 && buttonClicked ? <Main2 submit={submit}></Main2> : null}
      </div>
      <div className="oval_div" onClick={() => handleClick(4)}>
        <p className="img_p">4</p>
        {submit === 4 && buttonClicked ? <Main2 submit={submit}></Main2> : null}
      </div>
      <div className="oval_div" onClick={() => handleClick(5)}>
        <p className="img_p">5</p>
        {submit === 5 && buttonClicked ? <Main2 submit={submit}></Main2> : null}
      </div>
    </section>
  );
}

export default Ovals;
