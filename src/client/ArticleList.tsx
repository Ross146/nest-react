import * as React from 'react';
import {ArticleListResponse} from '../common/ArticleListResponse';
import {Link} from 'react-router-dom';

export const ArticleList = () => {
  const [article, setArticle] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch('/api/article/list')
      .then<ArticleListResponse>(response => response.json())
      .then(articles => setArticle(articles));
  }, [])

  return (
    <nav>
      <ul>
        {article.map(item => (
          <li>
            <Link to={`/article/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
