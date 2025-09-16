import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./components/counter";
import Products from "./components/product";
import CartPage from "./components/cartPage";
import Header from "./components/header";

function App() {   
  return ( 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;