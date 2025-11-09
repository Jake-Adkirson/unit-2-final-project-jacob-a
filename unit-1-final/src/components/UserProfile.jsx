import { useAuth } from './AuthContext';


const UserProfile = () => {
    const { currentUser } = useAuth();
    return( 
        <div>
        {currentUser ? ( 
            <div className="Profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
                <p>Name: {currentUser.name}</p>
                <p>Age: {currentUser.age}</p>
                <p>State: {currentUser.location}</p>
                <p>Preferred Watercraft: {currentUser.watercraft}</p>
            </div>
        ) : (
            <div className="Profile">
                <p>Please sign up or log in to view your profile!</p>
            </div>
        )}
        </div>
    );
}

export default UserProfile;