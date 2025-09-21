import { BrowserRouter } from "react-router-dom";
import Counter from "./component/Counter";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Counter />
      </div>
    </BrowserRouter>
  );
}

export default App;