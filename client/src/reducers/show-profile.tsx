const profilePic = require('../images/profilepic.jpg');

const ShowProfileReducer = () => {
    return {
        profilePic: profilePic,
        username: 'King of JS',
        favLinks: 0,
        sharedLinks: 0
    };
};

export default ShowProfileReducer;