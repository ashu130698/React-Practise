import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./components/counter";
import Products from "./components/product";

function App() {   
  return ( 
    <BrowserRouter>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to='counter'> Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to='products'>Products</Link>
        </li>
      </ul>
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="products" element={<Products />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;