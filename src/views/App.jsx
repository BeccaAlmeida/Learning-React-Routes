import './app.css';
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './../components/layouts/menu/Menu';
import Content from './../components/layouts/content/Content';

const App = props => (
    <div className="app">
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>
)

export default App;