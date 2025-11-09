import logo from '../assets/new-float-logo.png';
import { Link } from 'react-router';
import NavBar from './NavBar';
import { useAuth } from './AuthContext';


const Header = () => {
    const { currentUser, logout } = useAuth();

        return ( //conditional formatting to either display sign in with logout account button disabled or sign out with logout button enabled
            <div>
            {!currentUser ? (
                <div>
                    <header>
                        <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/>
                        <br/>
                        <button>
                        <Link to='/sign_in'>Sign In</Link> 
                        </button>
                        <button disabled>Logout</button>
                        <h1>Float With the Most</h1>
                        <NavBar />
                    </header>
                </div>
                ) : (
                <div>
                    <header>
                        <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/>
                        <br/>
                        <button disabled>
                        <Link to='/sign_in'>Sign In</Link> 
                        </button>
                        <button onClick={logout}>Logout</button>
                        <h1>Float With the Most</h1>
                        <NavBar />
                    </header>
                </div>
            )}
            </div>
    );
} 

export default Header;