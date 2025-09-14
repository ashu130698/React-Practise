function header() {
    return (
      <>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="counter">
              {" "}
              Counter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">
              Products
            </Link>
          </li>
        </ul>
      </>
    );
}

export default header;