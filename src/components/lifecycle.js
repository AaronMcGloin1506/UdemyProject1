import React, {Component} from 'react';

class Life extends Component {

    constructor(props){
        super(props);

        this.state = { name: 'Francis'}
        console.log('1-Constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('2-GetDerivedStateFromProps');
        
        if(state.name === 'Aaron'){
            return{
                name:'Jeff'
            }
        }

        return null;
     }

    componentDidMount(){
        console.log('4-componentDidMount');
     }

    componentWillUnmount(){
        console.log('5-componentWillUnmount');
     }

    shouldComponentUpdate(nextProps, nextState){

        console.log('6-shouldComponentUpdate');
        if(nextState.name === 'Steve'){
            return false
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        let age = 20;


        return age;
    }

    componentDidUpdate(prevProps, PrevState, snapshot){
        console.log('component did update')
        console.log(PrevState);
        console.log(snapshot);
        
    }

    render(){
        console.log('3-Render');
        return(
            <div>
                <div onClick ={() => this.setState({name:'Aaron'})}>
                    change name 
                </div>
            </div>
        )
    }

}

export default Life;