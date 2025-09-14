import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./components/counter";
import Products from "./components/product";

function App() {   
  return ( 
    <BrowserRouter>
      
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="products" element={<Products />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;