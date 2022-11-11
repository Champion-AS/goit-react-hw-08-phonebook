import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutForm } from 'redux/auth/authOperation';
import { getIsLoggedIn } from 'redux/selector';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const isLoggedIn = useSelector(getIsLoggedIn);

  const handlelogaut = () => {
    dispatch(logoutForm());
  };

  return (
    <header>
      <nav>
        <NavLink to="/"> Home</NavLink>
        {!isLoggedIn && (
          <ul>
            <li>
              <NavLink to="/register">Registration</NavLink>
            </li>
            <li>
              <NavLink to="/authorization">Authorization</NavLink>
            </li>
          </ul>
        )}
        {isLoggedIn && (
          <button type="button" onClick={handlelogaut}>
            Log aut
          </button>
        )}
      </nav>
      {isLoggedIn && (
        <>
          <span>Hello {user.name}</span>
          <br />
          <span>{user.email}</span>
        </>
      )}
    </header>
  );
};
