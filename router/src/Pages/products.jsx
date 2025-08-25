import { useEffect, useState } from "react";

function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        throw new Error("Not Found");
        
    },[])
    return ( 
        <div>
            {JSON.stringify(products,setProducts)}

        </div>
     );
}

export default Product;