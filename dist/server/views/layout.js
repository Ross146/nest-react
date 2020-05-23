"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Layout = () => {
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("meta", { charSet: "UTF-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" }),
            React.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "ie=edge" }),
            React.createElement("title", null, "Title")),
        React.createElement("body", null,
            React.createElement("div", { id: "app" }),
            React.createElement("script", { src: "./bundle.js" }))));
};
exports.default = Layout;
//# sourceMappingURL=layout.js.map