import { useEffect, useState } from "react";

function Product() {
    const [products, setProducts] = useState([]);
    const fetchData= async () => {
        try {
            const resp = await axios.get('https://dummyjson.com/products');
            setProducts(resp.data.products);
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return ( 
        <div>
            <h3 className="text-center p-2 text-bg-primary">Product Page</h3>
            <div className="row">
                <div className="col-12 col-lg-3 col-md-6">
                    <div className="card">

                    </div>
                </div>
            </div>

        </div>
     );
}

export default Product;