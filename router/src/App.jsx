import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header"
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import Product from "./Pages/products";
import NotFound from "./Pages/NotFound";
import ErrorPage from "./Pages/ErrorPage";
import Dashboard from "./Pages/dashboard";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Product />} />
        
        <Route path="dashboard/*" element={<Dashboard />} />



        {/* 404 path always keep last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
