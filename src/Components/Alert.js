import React from 'react'

const Alert = (props) => {

    let type=(props.alert)?props.alert.type:null;
    let capType=(type)?(type.substring(0,1).toUpperCase() +type.substring(1,type.lenght)):"";
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capType}: </strong>{props.alert.message}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}

export default Alert