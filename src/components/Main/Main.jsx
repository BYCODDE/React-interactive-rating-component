import React, { useState } from "react";
import Star from "/images/Star.svg";
import Text from "../Text/Text";
import Ovals from "../Ovals/Ovals";
import Button from "../Button/Button";
import Main2 from "../../components2/Main/Main2"; // Import the alternative Main component
import "./main.css";
function Main() {
  const [submit, setSubmit] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleClick = function (submitIndex) {
    if (submit === submitIndex) {
      setSubmit(null);
    } else {
      setSubmit(submitIndex);
    }
  };

  const handleMainButtonClick = function () {
    if (!buttonClicked) {
      setButtonClicked(true);
    }
  };

  return (
    <>
      {submit && buttonClicked ? (
        <Main2 submit={submit} />
      ) : (
        <main className="main_element">
          {/* TODO: img დივზე შეცვალო და გავასწორო */}
          <img src={Star} alt="star_svg" />
          <Text />
          <Ovals
            submit={submit}
            handleClick={handleClick}
            buttonClicked={buttonClicked}
          />
          <Button handleMainButtonClick={handleMainButtonClick} />
        </main>
      )}
    </>
  );
}

export default Main;
