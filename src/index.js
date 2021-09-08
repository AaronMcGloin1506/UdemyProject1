import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

import Header from './components/header';


const App = () => (
    <>
        <Header />
    </>
)


ReactDOM.render(<App/>, document.getElementById('root'))