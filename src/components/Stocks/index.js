import { Redirect, useHistory } from "react-router-dom";

function Stocks() {
  let loggedIn = true;
  let history = useHistory();

  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };

  if (!loggedIn) {
    return <Redirect to="/not-logged-in" />;
  }

  return (
    <div className="comp orange">
      <button onClick={handleClick}>Home</button>
      <h1>Stocks Component</h1>
    </div>
  );
}

export default Stocks;
