import AxiosApi from "./Components/AxiosApi";
import AxiosApi2 from "./Components/AxiosApi2";
import FetchApi from "./Components/FetchApi";
import Card from "./CARD/Card";
import ProductList from "./Components/productlist";
import ProductForm from "./Components/productform";

function App() {
  return ( 
    <div className="App">

      {/* <div className="header">
        <h1>React card component</h1>
      </div>
      <div className="cards">
        <Card /> */}
        <ProductList />
        
      

      {/* <AxiosApi2 /> */}
      {/* <AxiosApi /> */}
      {/* <FetchApi /> */}
    </div>
   );
}

export default App;