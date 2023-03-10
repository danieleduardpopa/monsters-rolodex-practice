import { useEffect, useState, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLowerCase();
    setTitle(searchField);
  }
  
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters, searchField]);

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox 
        className='search-box'
        handleChange={handleSearchChange}
        placeholder='search monsters'
      />
      <br />
      <SearchBox 
        className='title-search-box'
        handleChange={handleTitleChange}
        placeholder='set title'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}


export default App;
