import "./main.css";
import Star from "/images/Star.svg";
import Text from "../Text/Text";
import Ovals from "../Ovals/Ovals";
import Button from "../Button/Button";

function Main() {

  return (
    <main className="main_element">
      <img src={Star} alt="star_svg" />
      <Text></Text>
      <Ovals></Ovals>
      <Button></Button>
    </main>
  );
}

export default Main;
