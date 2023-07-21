import "./App.css";
import "./component/Logos";
import Logos from "./component/Logos";
import Counter from "./component/Counter";
import Increment from "./component/Increment";

function App() {
  return (
    <>
      <Logos></Logos>
      <h1>Lab 2</h1>
      <div className="card">
        <Counter></Counter>
        <hr></hr>
        <Increment></Increment>
        <p>By Nguyen Viet My</p>
      </div>
    </>
  );
}

export default App;
