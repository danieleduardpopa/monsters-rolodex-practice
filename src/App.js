import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '' 
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      this.setState({
        monsters: [...users]
      })
    })
  }
  
  handleSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { handleSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className='search-box'
          handleChange={handleSearchChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
