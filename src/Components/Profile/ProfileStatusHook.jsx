import React, { useState } from 'react';

const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let changeStatus = (e) => {
        setStatus(e.target.value);
    }


    return(
        <div className='status'>
                {editMode ? <div>
                        <input autoFocus={true} onBlur={deactivateEditMode} className='status__input' type='text' value={status} onChange={changeStatus} />
                    </div>  : <div>
                <span onDoubleClick={activateEditMode} className='status__text'>{status}</span>
                </div>}
            </div>
    )
}

export default ProfileStatusHook;