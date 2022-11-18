// import { useSelector, useDispatch } from 'react-redux';
// import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  // const auth = useSelector(state => state.auth);
  // const showCounter = useSelector(state => state.);

  // const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
