import "./oval.css";
import Oval from "/images/Oval.svg";
function Ovals() {
  return (
    <section className="oval_section">
      <div>
        <img src={Oval} alt="Oval1" />
        <p className="img_p">1</p>
      </div>

      <div>
        <img src={Oval} alt="Oval2" />
        <p className="img_p">2</p>
      </div>

      <div>
        <img src={Oval} alt="Oval3" />
        <p className="img_p">3</p>
      </div>
      <div>
        <img src={Oval} alt="Oval4" />
        <p className="img_p">4</p>
      </div>
      <div>
        <img src={Oval} alt="Oval5" />
        <p className="img_p">5</p>
      </div>
    </section>
  );
}

export default Ovals;
