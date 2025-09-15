import { useSelector } from "react-redux";

function CartPage() {
    const items = useSelector(state => state.cartReducer.items);
    console.log(items);
    
    return ( 
        <div>

        </div>
     );
}

export default CartPage;