import './index.css'

const Header = () => (
  <div className="bg">
    <nav className="nav-bar">
      <div className="nav-menu-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="nav-logo"
          alt="website logo"
        />
        <ul className="nav-menu-items">
          <li className="menu-item">Home</li>
          <li className="menu-item">Products</li>
          <li className="menu-item">Cart</li>
          <li>
            <button type="button" className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
        <button type="button" className="logout-btn-sm">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="logout-img"
            alt="nav logout"
          />
        </button>
      </div>
    </nav>
    <div className="menu-btn-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="menu-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="menu-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="menu-img"
      />
    </div>
  </div>
)

export default Header
