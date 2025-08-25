import { useLocation } from "react-router-dom";

function NotFound() {
    const location = useLocation();
    const path = location.pathname.split('/')[1];
    return (
      <div>
        <h3>Path {path} which are you trying to access not found...!!</h3>
        <img src="https://tse3.mm.bing.net/th/id/OIP.zXgliiyS1EJ__j_e32TBTwHaEK?pid=Api&P=0&h=350" height="350" className="w-100" alt="pagenotfound" />
      </div>
    );
}

export default NotFound;