export default function MobileMenu({ setMobileBurgerMenu, children }) {
  return (
    <div className='mobile_menu' onClick={() => setMobileBurgerMenu(menu => !menu)}>
      {children}
    </div>
  )
}
