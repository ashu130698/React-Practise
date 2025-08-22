import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "./productform";
import EditForm from "./editform";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(`http://localhost:3000/products/${id}`);
      if (resp.status == 200) {
        alert("Product Deleted");
        fetchData();
      }
    } catch (error) {
      console.log("Error while deleting:", error);
      alert("Failed to delete product");
    }
  };
  const fetchData = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/products/");
      setProducts(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* {
            // products ? */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => setSelected(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
      {/*: <div className="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div className="spinner-border ms-auto" aria-hidden="true"></div>
</div> */}
      <div className="row">
        <div className="col">
          <ProductForm fetchData={fetchData} />
        </div>
        <div className="col">
          {selected && (
            <EditForm
              selected={selected}
              setSelected={setSelected}
              fetchData={fetchData}
            />
          )}
        </div>
      </div>{" "}
      */
    </div>
  );
}

export default ProductList;
