import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import { increament, decreament } from './Actions';
import { logged } from './Actions/isLoggedAction';

function App() {

  const dispatch = useDispatch();

  const counter = useSelector(state=>state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);

  return (
    <div className="App">
        <h1>total : {counter}</h1>
        <button onClick={() => dispatch(increament())}>+</button>
        <button onClick={() => dispatch(decreament())}>-</button><br/>
        <button onClick={() => dispatch(logged())}>Logout</button>
        {isLogged ? <h3>Hello World</h3> : ""} 
        
        {/* {isLogged ? <div><h3>Hello World</h3> <button onClick={() => dispatch(logged())}>Logout</button></div> : ""} */}
    </div>
  );
}

export default App;
