import React from 'react';

class Header extends React.Component {

    inputChangeHandler(event){
        console.log(event.target.value);
    }

    render(){
        return (
            <header>
                <div className ="logo">Logo</div>
                <input 
                    onChange={this.inputChangeHandler} 

                />
            </header>
        )
    }

}

export default Header;