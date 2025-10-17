const UserProfile = () => {
    const localName = localStorage.getItem('name');
    const localAge = localStorage.getItem('age');
    const localState = localStorage.getItem('state');
    const localPrefWatercraft = localStorage.getItem('prefWatercraft');

    return( //pulls data from local storage to populate profile info
        <div className="Profile">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
        <p>Name: {localName}</p>
        <p>Age: {localAge}</p>
        <p>State: {localState}</p>
        <p>Preferred Watercraft: {localPrefWatercraft}</p>
        </div>
    );
}

export default UserProfile;