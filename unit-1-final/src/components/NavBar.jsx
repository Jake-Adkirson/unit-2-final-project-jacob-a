import ReusableButton from './ReusableButton';
import ReusableLink from './ReusableLink';

const NavBar = () => {
    return( //utilizes reusable button and link
    <div className="NavBar">
        <ReusableButton style={{backgroundColor:"white"}}>
        <ReusableLink to={"/welcome"}>Home</ReusableLink>
        </ReusableButton>
        <ReusableButton style={{backgroundColor:"white"}}>
            <ReusableLink to={"/events_page"}>Events</ReusableLink>
        </ReusableButton>
        <ReusableButton style={{backgroundColor:"white"}}>
            <ReusableLink to={"/profile"}>Profile</ReusableLink>
        </ReusableButton>
        <ReusableButton style={{backgroundColor:"white"}}>
            <ReusableLink to={"/about"}>About</ReusableLink>
        </ReusableButton>
    </div>
    );
}

export default NavBar;