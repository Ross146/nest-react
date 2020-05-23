"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleList = void 0;
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
exports.ArticleList = () => {
    const [article, setArticle] = React.useState([]);
    React.useEffect(() => {
        fetch('/api/article/list')
            .then(response => response.json())
            .then(articles => setArticle(articles));
    }, []);
    return (React.createElement("nav", null,
        React.createElement("ul", null, article.map(item => (React.createElement("li", null,
            React.createElement(react_router_dom_1.Link, { to: `/article/${item}` }, item)))))));
};
//# sourceMappingURL=ArticleList.js.map