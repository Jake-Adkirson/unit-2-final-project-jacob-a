import logo from '../assets/new-float-logo.png';
import { Link } from 'react-router';
import NavBar from './NavBar';


const Header = () => {
    const localSignIn = localStorage.getItem('signUp');

    const logout = () => { //uses local storage to simulate logout and account deletion
        localStorage.removeItem("signUp");
        window.location.reload();
    }
    const deleteAccount = () => {
        localStorage.clear();
        window.location.reload();
    }

        return ( //conditional formatting to either display sign in with delete account button disabled or sign out with delete button enabled
            <header>
                <img src={logo} alt="Float With the Most Logo" style={{ height: '125px' }}/>
                <br/>
                <button>
                <Link to='/sign_in'>Sign In</Link> 
                </button>
                <button disabled>Delete Account</button>
                <h1>Float With the Most</h1>
                <NavBar />
            </header>
    );
} 

export default Header;