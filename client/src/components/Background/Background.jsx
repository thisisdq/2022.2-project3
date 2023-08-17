import React from 'react';
import AppContext from '../../AppContext';

const Background = () => {
    const { userStatus, setUserStatusTo , UserStatus} = React.useContext(AppContext)
    const handleOnClick = () => {
        if (userStatus === UserStatus.LoggedOut) {
            setUserStatusTo(UserStatus.LoggingIn);
        }
    };
    return (
        React.createElement("div", { id: "app-background", onClick: handleOnClick},
            React.createElement("div", { id: "app-background-image", className: "background-image" })));
  };

  export default Background;