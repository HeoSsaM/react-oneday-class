import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="nav">
      <Link
        to="/"
        className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}
      >
        홈
      </Link>

      <Link
        to="/classes"
        className={
          location.pathname.includes('/classes')
            ? 'nav-item active'
            : 'nav-item'
        }
      >
        클래스
      </Link>
    </nav>
  )
}
