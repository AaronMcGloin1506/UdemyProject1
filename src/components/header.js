import React from 'react';

class Header extends React.Component {

    state = {
            keywords: '',
        }


    inputChangeHandler=(event)=>{
        this.setState({
            keywords: event.target.value
        })
    }


    render(){
        return (
            <header>
                <div className ="logo">Logo</div>
                <input 
                    onChange={this.inputChangeHandler} 

                />
                <div>{this.state.keywords}</div>

            </header>
        )
    }

}

export default Header;