import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Quotes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-quote">Submit New Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar