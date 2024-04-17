import "./result.css";
function Result({ submit }) {
  return (
    <div className="result_div">
      <p className="result_p">You selected {submit} out of 5</p>
    </div>
  );
}

export default Result;
