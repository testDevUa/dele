import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUser, getStatus, setStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12856;
        }
        this.props.setUser(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return state.profileReducer;
}

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUser, getStatus, setStatus })(WithUrlDataContainer);