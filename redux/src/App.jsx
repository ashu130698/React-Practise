import { useDispatch, useSelector } from "react-redux";

function App() {   //useSelector is for read state(whole)
  const count = useSelector(state => state.count);   //for trigger the action we use hook useDispatch
  const dispatch = useDispatch();
  const increment = () => {
    dispatch  ({type:'INCREMENT'})
  }
  return ( 
    <div>
      <h3>count : {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
    </div>
   );
}

export default App;