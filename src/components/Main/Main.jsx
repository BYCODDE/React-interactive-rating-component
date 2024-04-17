import "./main.css"

import Star from "/images/Star.svg";
import Text from "../Text/Text";
import Ovals from "../Ovals/Ovals"; // Assuming Text is another component
import Button from "../Button/Button";
import { useState } from "react";
function Main() {
  const [submit, setSubmit] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false); // Set to false initially
  const handleClick = function (submitIndex) {
    if (submit === submitIndex) {
      setSubmit(null);
    } else {
      setSubmit(submitIndex);
    }
  };

  const handleMainButtonClick = function () {
    if (!buttonClicked) {
      // Check if buttonClicked is false
      console.log("button clicked");
      setButtonClicked(true); // Set to true after clicking
    }
  };

  return (
    <main className="main_element">
      <img src={Star} alt="star_svg" />
      <Text />
      <Ovals
        submit={submit}
        handleClick={handleClick}
        buttonClicked={buttonClicked}
      />
      <Button handleMainButtonClick={handleMainButtonClick} />
    </main>
  );
}
export default Main;
