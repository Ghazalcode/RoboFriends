import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import './App.css';

//creating a state uses class
class App extends Component{
    constructor(){
        super()
        //state object declaration
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    //life cycle react
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({robots: users})});
    }
    //search object declaration
    onSearchChange = (event) =>{
        //setState to track the change
        this.setState({searchField: event.target.value});
    }
    render(){
        //destructuring
        const {robots, searchField} = this.state;
        //filtering the robot array
        const filterSearch = robots.filter(
                                                robot =>
                                                {
                                                    return robot.name.toLowerCase().includes(searchField.toLowerCase())
                                                });
        //returning the  result
       if(robots.length === 0){
           return <h1 className='tc'>Loading</h1>
       }else{
        return (
            <div className='tc'>
                <h1 classNmae="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterSearch} />
                </Scroll>

            </div>

        );
       }

    }

}

export default App;