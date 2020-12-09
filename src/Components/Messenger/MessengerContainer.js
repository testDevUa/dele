import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Messenger from './Messenger';

class MessengerContainer extends React.Component {
    render() {
        return(
            <Messenger {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.messengerReducer,
        isAuth: state.authReducer
    }
}

let AuthRedirectComponent = withAuthRedirect(MessengerContainer);

export default compose(
    connect(mapStateToProps, {})(AuthRedirectComponent)
)

// export default connect(mapStateToProps, {})(AuthRedirectComponent);