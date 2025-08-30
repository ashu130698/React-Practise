import { useEffect, useState } from "react";

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
        <div className="col-12 col-lg-3 col-md-6">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
