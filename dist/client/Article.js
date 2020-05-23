"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
exports.Article = () => {
    const { name } = react_router_dom_1.useParams();
    const [article, setArticle] = React.useState('');
    React.useEffect(() => {
        fetch(`/api/article/${name}`)
            .then(response => response.text())
            .then(article => setArticle(article));
    }, []);
    return (React.createElement("div", null, article));
};
//# sourceMappingURL=Article.js.map