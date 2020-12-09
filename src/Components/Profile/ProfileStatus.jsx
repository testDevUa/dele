import React from 'react';
import './Profile.css';

class ProfileStatus extends React.Component {

    state = {
        status: this.props.status,
        editMode: false
    };

    activateEdit = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEdit = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    changeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        return (
            <div className='status'>
                {this.state.editMode ? <div>
                        <input autoFocus={true} onBlur={this.deactivateEdit} onChange={this.changeStatus} className='status__input' type='text' value={this.state.status}/>
                    </div>  : <div>
                    <span onDoubleClick={this.activateEdit} className='status__text'>{this.state.status}</span>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;