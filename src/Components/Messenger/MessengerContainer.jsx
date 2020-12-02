import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Messenger from './Messenger';

class MessengerContainer extends React.Component {
    render() {
        return(
            <Messenger {...this.props} />
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(MessengerContainer);

let mapStateToProps = (state) => {
    return {
        messages: state.messengerReducer,
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(MessengerContainer)

// export default connect(mapStateToProps, {})(AuthRedirectComponent);