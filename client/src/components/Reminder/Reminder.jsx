import React from "react";

const Reminder = () => {
    return (React.createElement("div", { className: "reminder" },
        React.createElement("div", { className: "reminder-icon" },
            React.createElement("i", { className: "fa-regular fa-bell" })),
        React.createElement("span", { className: "reminder-text" },
            "Nộp báo cáo đồ án 3 ",
            React.createElement("span", { className: "reminder-time" }, "10AM 25.08.2023"))));
}

export default Reminder;