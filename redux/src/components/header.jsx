import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function header() {
  const cart = useSelector(state => state.cartReducer.items);
    return (
      <>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="counter">
              Counter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link type="button" className="btn btn-primary positive-relative" to='cart'>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </Link>
          </li>
        </ul>
      </>
    );
}

export default header;