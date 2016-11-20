import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Root from 'containers/root/Root';
import NotFound from 'components/NotFound';
import menu from 'config/menu';

const main = () => (
  <div>
    <section className="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
        <li className="active">Dashboard</li>
      </ol>
    </section>
    <section className="content">
      Hello World
    </section>
  </div>
);


const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Root} >
      <IndexRoute component={main} />
      {
        menu.filter(item => !!item.component)
        .map((item, idx) => <Route key={idx} path={item.link} component={item.component} />)
      }
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default App;
