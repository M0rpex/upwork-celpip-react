import logo from "../img/logo.png";
import signInIco from "../img/fa_cog.png";

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-inner">
          <a
            className="brand"
            href="https://www.celpip.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="Logo" />
          </a>

          <div className="brand mt-15">Study Materials</div>

          <ul className="nav mt-8">
            <li className="dropdown">
              <div className="dropdown-toggle mt-10" data-toggle="dropdown">
                Selected Product:
                <span id="selected-product">Click to Select Product</span>
                <b className="caret"></b>
              </div>
            </li>

            <li>
              <div className="ml-19">
                <ul className="nav nav-pills header-buttons"></ul>
              </div>
            </li>
          </ul>

          <ul className="nav pull-right mt-17">
            <form
              returnurl=""
              action="/InstructionalProducts/Account/Authenticate"
              method="post"
            >
              <li className="loginButton">
                <img
                  className="header__ico"
                  src={signInIco}
                  alt="Sign In Icon"
                />
                <input
                  type="submit"
                  className="btn btn-link"
                  id="sign-in-link"
                  value="SIGN IN"
                />
              </li>
            </form>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
