import MenuList from './MenuList'

export default function Header({ windowWidth, burgerMenu, setHeaderBurgerMenu }) {
  return (
    <header>
      <div className="header_block">
        <button className="logo_btn">
          {windowWidth > 900 ? 'Movie Land' : 'ML'}
          <img src="/logo.svg" alt="logo-image" />
        </button>
        {windowWidth > 700 &&
          <>
            <MenuList className="header__menu-list" />
          </>
        }
        <div style={{ display: "flex", alignItems: "center", gap: "20px", position: "relative", zIndex: "10" }}>
          <button className='signIn_btn'>Sign in</button>

          {windowWidth < 700 && <button className={`burger-btn ${burgerMenu ? 'open' : ''}`} onClick={() => setHeaderBurgerMenu(menu => !menu)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>}
        </div>

      </div>
    </header>
  )
}

