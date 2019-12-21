import React from 'react';
import Card from './component/card/card.js';
import {CardList} from './component/CardList/cardList.js';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={users:[],searchfield:""}
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>this.setState({users:data}));
  }
  filteredcard=(e)=>{
    this.setState({searchfield:e.target.value})
  }

  render(){
      
      const {users,searchfield}=this.state;
      const filteredRobot = users.filter(searchfield=>searchfield.name.toLowerCase()
        .includes(this.state.searchfield.toLowerCase()));
    

    
  return (
    <div className="App">
    <h1>ROBO FRIENDS</h1>
    <input onChange={this.filteredcard} type="text" placeholder="Search Robots"/>
    <CardList users = {filteredRobot}/>
    
  </div>
  );
}
}

export default App;

