import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();