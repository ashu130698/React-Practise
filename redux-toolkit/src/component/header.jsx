import { useSelector } from "react-redux";

function Header() {
    const cart = useSelector(state => state.cart.items);
    return ( 
        <div>

        </div>
     );
}

export default Header;