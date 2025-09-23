import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./component/Counter";
import CartPage from "./component/CartPage";
import Header from "./component/header";
import Products from "./component/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>
      <Routes>
        <Route path="counter" element={<Counter />}/>
        <Route path="products" element={<Products />}/>
        <Route path="cart" element={<CartPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;