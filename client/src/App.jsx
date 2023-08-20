import React from 'react'
import Info from './components/Info/Info'
import Loading from './components/Loading/Loading';
import AppContext from './AppContext';
import Background from './components/Background/Background';
import Pin from './components/PIN/Pin'

var UserStatus = {
    LoggedIn: "Logged In",
    LoggingIn: "Logging In",
    LoggedOut: "Logged Out",
    LogInError: "Log In Error",
    VerifyingLogIn: "Verifying Log In"
}



const App = () => {
  const [userStatus, setUserStatusTo] = React.useState(UserStatus.LoggedOut);
  console.log(userStatus);
  const getStatusClass = () => {
      return userStatus.replace(/\s+/g, "-").toLowerCase();
  };
  return (React.createElement(AppContext.Provider, { value: { userStatus, setUserStatusTo , UserStatus} },
      React.createElement("div", { id: "app", className: getStatusClass() },
          React.createElement(Info, { id: "app-info" }),
          React.createElement(Pin, null),
          React.createElement(Background, null),
          React.createElement(Loading, null))));
};

export default App