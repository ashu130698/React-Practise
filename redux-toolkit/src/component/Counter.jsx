import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByamount, increment, incrementByamount } from "../redux/CounterSlice";

function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return ( 
        <div>
            <h3>Counter Comp : {count}</h3>
            <button className="btn btn-primary" onClick={()=>dispatch(increment())}>+</button>
            <button className="btn btn-warning" onClick={()=>dispatch(decrement())}>-</button>
            <button className="btn btn-secondary" onClick={()=>dispatch(incrementByamount(3))}>Increment By 3</button>
            <button className="btn btn-success" onClick={()=>dispatch(decrementByamount(3))}>Decrement by 3</button>
        </div>
     );
}

export default Counter;