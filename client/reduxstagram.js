import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';


// import css files
import css from './styles/style.styl';


//import Components
import App from './components/app';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


//binding react with redux using Provider
import { Provider } from 'react-redux';
import store, { history } from './store';


//Route files
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>
)

render(
    router,
    document.getElementById('root')
);