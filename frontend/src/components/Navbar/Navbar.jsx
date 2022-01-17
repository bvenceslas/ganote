import { Link, useNavigate } from 'react-router-dom';
import './index.css';


const Navbar = () => {

    const navigate = useNavigate();
    return ( 
        <nav className="navbar">
            <h1 className="logo" onClick={() => navigate('/')}>
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