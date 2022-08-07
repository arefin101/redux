import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import { increament } from './Actions';
import { decreament } from './Actions';

function App() {

  const dispatch = useDispatch();

  const counter = useSelector(state=>state.counter);

  const isLogged = useSelector(state=>state.isLogged)

  return (
    <div className="App">
      <h1>Hello {counter} ok {isLogged}</h1>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
}

export default App;
