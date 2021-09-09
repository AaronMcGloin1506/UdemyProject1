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
        filtered:JSON,
        footerText: 'I am a happy footer',
        keywords: ''
    }

    getKeyWords = (event) => {
        console.log(event.target.value);
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        })

        console.log(filtered);
        this.setState({
            filtered
        })
    }

    render(){

        const {news,footerText,filtered} = this.state;


        return (
            <>
                <Header 
                    keywords={this.getKeyWords}
                />
                <News_list 
                    news={filtered}>
                        <br />
                        <h1>I am a child</h1>
                    </News_list>
                <Footer footerText={footerText}/>
             </>

        )
        
    }
    
}


ReactDOM.render(<App/>, document.getElementById('root'))