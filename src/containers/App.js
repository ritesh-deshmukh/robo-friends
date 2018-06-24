import React, {Component} from 'react'
import CardList from "../components/CardList";
// import {robots} from "./robots";
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'

// STATE => Object that describes the application(robots in the searchbox)
// STATE => PROPS
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield: ''
        }
        // console.log('constructor')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
        // this.setState({robots: robots})
        // console.log('componentDidMount')
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        // console.log(event.target.value)
    }
    render(){
        const {robots, searchfield} = this.state
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        // console.log('render')
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
    }
}

export default App