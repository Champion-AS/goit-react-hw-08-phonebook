import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutForm } from 'redux/auth/authOperation';
import { getIsLoggedIn } from 'redux/selector';
import s from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const isLoggedIn = useSelector(getIsLoggedIn);

  const handlelogaut = () => {
    dispatch(logoutForm());
  };

  return (
    <header>
      <nav className={s.nav}>
        <NavLink to="/"> Home</NavLink>
        {!isLoggedIn && (
          <ul className={s.list}>
            <li lassName={s.item}>
              <NavLink to="/register">Registration</NavLink>
            </li>
            <li className={s.item}>
              <NavLink to="/authorization">Authorization</NavLink>
            </li>
          </ul>
        )}
        {isLoggedIn && (
          <button type="button" onClick={handlelogaut} className={s.btn}>
            Logout
          </button>
        )}
      </nav>
      {isLoggedIn && (
        <div className={s.user}>
          <span>Hello: {user.name}</span>
          <br />
          <span>{user.email}</span>
        </div>
      )}
    </header>
  );
};
