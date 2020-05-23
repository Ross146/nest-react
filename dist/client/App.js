"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const ArticleList_1 = require("./ArticleList");
const Article_1 = require("./Article");
const App = () => {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("h2", null,
            React.createElement("a", { href: "/" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")),
        React.createElement("nav", null,
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: '/article' }, "Articles"))),
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: '/article/:name' },
                React.createElement(Article_1.Article, null)),
            React.createElement(react_router_dom_1.Route, { path: '/article' },
                React.createElement(ArticleList_1.ArticleList, null)))));
};
react_dom_1.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=App.js.map