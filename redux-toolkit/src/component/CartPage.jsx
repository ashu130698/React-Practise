import { useDispatch, useSelector } from "react-redux";

function CartPage() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    return ( 
        <div>
            <h3>Cart Page</h3>
            {
                items.length == 0 ? <p>Cart is Empty</p> :
                    <div>
                        
                    </div>
            }
        </div>
     );
}

export default CartPage;