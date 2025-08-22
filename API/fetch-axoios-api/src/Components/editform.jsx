import axios from "axios";
import { useEffect, useState } from "react";

function EditForm({selected,setSelected,fetchData}) {
    const [product,setProduct]=useState(selected);
    useEffect(()=>{
        setProduct(selected);
    },[selected]);
    const handleSubmit =async(e)=> {
        e.preventDefault();
        
        const resp = await axios.put('http://localhost:3000/products/'+product.id,product);
        if(resp.status==200) {
            alert('Product edited succesfully');
            fetchData();
            setProduct(null);
        } else {
            alert('Error while editing product');
        }
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <h3> Edit Product</h3>
                <div className="form-group mb-3">
                <label htmlFor="name">Product Name:</label>
                <input type="text" placeholder="i.e; lenovo" className="form-control" id="name" onChange={(e)=>setProduct({...product,name:e.target.value})} value={product.name} />
                </div>
                <div className="form-group mb-3">
                <label htmlFor="price">Product Price:</label>
                <input type="text" placeholder="i.e; 39999" className="form-control" id="price" onChange={(e)=>setProduct({...product,price:e.target.value})} value={product.price}/>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="category">Product Catgory:</label>
                <input type="text" placeholder="i.e; electronics" className="form-control" id="category" onChange={(e)=>setProduct({...product,category:e.target.value})} value={product.category}/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary w-50" type="submit">Update</button>
                    <button className="btn btn-secondary w-50" onClick={()=>setSelected(null)}>Cancel</button>
                </div>
            </form>
        </div>
     );
}

export default EditForm;
