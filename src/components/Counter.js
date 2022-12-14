import { useSelector, useDispatch } from 'react-redux';
// import { counterActions } from '../store/index-all-in-one-file';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment (+1)</button>
        <button onClick={increaseHandler}>Increase (+5)</button>
        <button onClick={decrementHandler}>Decrement (-1)</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
