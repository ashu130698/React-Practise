import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const resp = await axios.get("https://dummyjson.com/products");
      setProducts(resp.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h3 className="text-center p-2 text-bg-primary">Product Page</h3>
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-lg-3 col-md-6" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="card-title">{product.price}</h5>
                <p className="card-text">
                  {product.description}
                </p>
                <Link to={`/detail/${product.id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
