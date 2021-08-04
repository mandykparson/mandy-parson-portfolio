import '../NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar(props) {

    const handleToggle = () => {
        props.setNavbarOpen(prev => !prev)
    }

    const closeMenu = () => {
        props.setNavbarOpen(false)
    }

    return (
        <nav className="navBar">
            <button onClick={ handleToggle }>{props.navbarOpen ? "Close" : "Menu"}</button>
            <ul className={`menuNav ${props.navbarOpen ? " showMenu" : ""}`}>
                <li>
                    <Link 
                        to="/"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact> 
                            Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/projects"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact> 
                            Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/resume"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact>
                            Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
