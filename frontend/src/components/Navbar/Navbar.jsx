import { Link } from 'react-router-dom';
import './index.css';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="logo">
                GaNote
            </h1>

            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/create-note'>Create a note</Link>
            </div>

        </nav>
     );
}
 
export default Navbar;