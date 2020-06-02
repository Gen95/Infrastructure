import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import { IndexPage } from './pages/index-page';
import { ReviewsPage } from './pages/reviews-page';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/" component={IndexPage} exact />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
