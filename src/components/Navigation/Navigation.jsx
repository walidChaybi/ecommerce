import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";
import "../Navigation/Navigation.scss";
function Nav() {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/shop">
            Women
          </Link>
          <Link className="nav-link" to="/shop">
            Men
          </Link>
          <Link className="nav-link sign-in" to="/signin">
            Sign-in
          </Link>
          <Link className="nav-link sign-up" to="/signup">
            Sign-up
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Nav;
