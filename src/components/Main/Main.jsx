import "./main.css";
import Star from "/images/Star.svg";
import Text from "../Text/Text";
import Ovals from "../Ovals/Ovals";
import Button from "../Button/Button";
import { useState } from "react";

function Main() {
  const [submit, setSubmit] = useState(null);

  const handleClick = function (submitIndex) {
    if (submit === submitIndex) {
      setSubmit(null);
    } else {
      setSubmit(submitIndex);
    }
  };
  return (
    <main className="main_element">
      <img src={Star} alt="star_svg" />
      <Text></Text>
      <Ovals submit={submit}></Ovals>
      <Button handleClick={handleClick}></Button>
    </main>
  );
}

export default Main;
