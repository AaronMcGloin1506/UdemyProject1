import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import JSON from './db.json';


import Header from './components/header';
import News_list from './components/news_list';
import Footer from './components/footer'


class App extends Component {

    state = {
        news: JSON,
        footerText: 'I am a happy footer'
    }

    render(){

        const {news,footerText} = this.state;


        return (
            <>
                <Header />
                <News_list 
                    news={news}>
                        <br />
                        <h1>I am a child</h1>
                    </News_list>
                <Footer footerText={footerText}/>
             </>

        )
        
    }
    
}


ReactDOM.render(<App/>, document.getElementById('root'))