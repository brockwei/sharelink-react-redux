import * as React from 'react';
import { connect } from 'react-redux';
// const UserInfo = () => {
//     return (
//         <div>User Profile</div>
//     );
// };
interface UserInfoProps {
    showProfile: { profilePic: string, username: string, sharedLinks: number, favLinks: number };
}

class UserInfo extends React.Component<UserInfoProps, {}> {
    render() {
        // console.log(this.props.showProfile);
        return (
            <div>
                <div><img className="profile-picture" src={this.props.showProfile.profilePic} /></div>
                <h3>{this.props.showProfile.username}</h3>
                <h3>{this.props.showProfile.sharedLinks} shared links</h3>
                <h3>{this.props.showProfile.favLinks} liked links</h3>
            </div>
        );
    }
}
function mapStateToProps(state: { [key: string]: Object }) {
    return {
        showProfile: state.showProfile
    };
}

export default connect(mapStateToProps)(UserInfo);
// export default UserInfo;