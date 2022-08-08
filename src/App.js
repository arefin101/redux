import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import { increament, decreament } from './Actions';

function App() {

  const dispatch = useDispatch();

  const counter = useSelector(state=>state.counterReducer);

  return (
    <div className="App">
        <h1>total : {counter}</h1>
        <button onClick={() => dispatch(increament(1))}>+</button>
        <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
}

export default App;
