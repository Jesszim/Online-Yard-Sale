import { useSelector, useDispatch } from "react-redux";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import * as actions from '../util/redux/actions'
import ContactMe from "./ContactMe";

const NavBar = () => {
  const dispatch = useDispatch()

  let cart = useSelector(state => state.cart.cart)
  let isAuth = useSelector(state => state.auth.isAuth)

  const nav = useNavigate()

  const handleLogout = () => {
    dispatch(actions.logout())
    nav('/login')
    dispatch(actions.clearCart())
    sessionStorage.clear()
  }

  return (
    <>
      <div id="navbar">
        <nav>
          <NavLink className='link' to='/'>Home</NavLink>
          <NavLink className='link' to='/yardsale'>Yard Sale</NavLink>
          {isAuth ? <NavLink className='link' to='/checkout'>Cart({cart.length})</NavLink> : null}
        </nav>
        {isAuth ? <button className="logbtn" onClick={handleLogout}>Logout</button> : <button className="logbtn" onClick={() => nav('/login')}>Sign In/Sign Up</button>}
      </div>
      <Outlet />
      <ContactMe />
      <br />
    </>
  )
}

export default NavBar


