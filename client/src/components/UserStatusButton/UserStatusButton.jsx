/* eslint-disable react/prop-types */
import React from 'react'
import AppContext from '../../AppContext';

const UserStatusButton = (props) => {
    const { userStatus, setUserStatusTo} = React.useContext(AppContext);
    const handleOnClick = () => {
        setUserStatusTo(props.userStatus);
    };
    return (React.createElement("button", { id: props.id, className: "user-status-button clear-button", disabled: userStatus === props.userStatus, type: "button", onClick: handleOnClick },
        React.createElement("i", { className: props.icon })));
};

export default UserStatusButton