import React from "react";
import Info from "./components/Info/Info";
import Loading from "./components/Loading/Loading";
import AppContext from "./AppContext";
import Background from "./components/Background/Background";
import Pin from "./components/PIN/Pin";
import Menu from "./components/Menu/Menu";
import UserStatusButton from "./components/UserStatusButton/UserStatusButton";

var UserStatus = {
  LoggedIn: "Logged In",
  LoggingIn: "Logging In",
  LoggedOut: "Logged Out",
  LogInError: "Log In Error",
  VerifyingLogIn: "Verifying Log In",
};

const App = () => {
  const [userStatus, setUserStatusTo] = React.useState(UserStatus.LoggedOut);
  const getStatusClass = () => {
    return userStatus.replace(/\s+/g, "-").toLowerCase();
  };
  return React.createElement(
    AppContext.Provider,
    { value: { userStatus, setUserStatusTo, UserStatus, } },
    React.createElement(
      "div",
      { id: "app", className: getStatusClass() },
      React.createElement(Info, { id: "app-info" }),
      React.createElement(Pin, null),
      React.createElement(Menu, null),
      React.createElement(Background, null),
      React.createElement("div", { id: "sign-in-button-wrapper" },React.createElement(UserStatusButton, { icon: "fa-solid fa-arrow-right-to-arc", id: "sign-in-button", userStatus: UserStatus.LoggingIn })),
      React.createElement(Loading, null)
    )
  );
};

export default App;
