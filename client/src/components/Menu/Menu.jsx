import React from "react";
import Info from '../Info/Info'
import Reminder from '../Reminder/Reminder'
import UserStatusButton from "../UserStatusButton/UserStatusButton";
import AppContext from "../../AppContext";
import IOTController from "../IOTControllers/IOTControllers";
import Tools from "../Tools/Tools";


const Menu = () => {
    const { userStatus, setUserStatusTo, UserStatus} = React.useContext(AppContext);
    return (React.createElement("div", { id: "app-menu" },
        React.createElement("div", { id: "app-menu-content-wrapper" },
            React.createElement("div", { id: "app-menu-content" },
                React.createElement("div", { id: "app-menu-content-header" },
                    React.createElement("div", { className: "app-menu-content-header-section" },
                        React.createElement(Info, { id: "app-menu-info" }),
                        React.createElement(Reminder, null)),
                    React.createElement("div", { className: "app-menu-content-header-section" },
                        React.createElement(UserStatusButton, { icon: "fa-solid fa-arrow-right-from-arc", id: "sign-out-button", userStatus: UserStatus.LoggedOut }))),
                React.createElement(IOTController, null),
                React.createElement(Tools, null)
                ))));
};

export default Menu;
