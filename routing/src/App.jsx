import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Product from "./components/product";
import ProductDetail from "./components/productdetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">
              Products
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="products" element={<Product />} />
          <Route path="detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
