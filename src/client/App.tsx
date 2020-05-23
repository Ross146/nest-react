import * as React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import {ArticleList} from "./ArticleList";
import {Article} from "./Article";

const App = () => {
  return (
    <BrowserRouter>
      <h2><a href="/">Главная</a></h2>
      <nav>
        <li>
          <Link to='/article'>Articles</Link>
        </li>
      </nav>

      <Switch>
        <Route path='/article/:name'>
          <Article />
        </Route>
        <Route path='/article'>
          <ArticleList />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}

render(<App />, document.getElementById('app'))
