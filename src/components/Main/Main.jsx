import "./main.css";
import Star from "/images/Star.svg";
import Text from "../Text/Text";
function Main() {
  return (
    <main className="main_element">
      <img src={Star} alt="star_svg" />
      <Text></Text>
    </main>
  );
}

export default Main;
