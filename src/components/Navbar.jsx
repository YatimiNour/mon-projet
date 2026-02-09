import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Feedback Hub</Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/inscription">Inscription</Link>
          <Link className="nav-link" to="/photos">Ratez</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
