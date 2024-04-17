import "./main.css";
import thanksSvg from "/images/illustration-thank-you.svg";
import Result from "../Result/Result";
function Main2({ submit }) {
  return (
    <main className="main_2">
      <img src={thanksSvg} alt="Thanks_svg}" />
      <Result submit={submit}></Result>
    </main>
  );
}

export default Main2;
