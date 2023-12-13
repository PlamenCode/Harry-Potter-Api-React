import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/ui/Header';
import CharecterGrid from './components/charecters/CharecterGrid';
import Search from './components/ui/Search';

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            let result = (await axios('https://hp-api.onrender.com/api/characters')).data.slice(0, 20);
            setItems(result);
            setIsLoading(false);
        };
        fetchItems()
    }, [search]);

    function setFilter(filter){
        setSearch(filter);
    };

  return (
    <div className="container">
        <Header />
        <Search setFilter={setFilter} />
        <CharecterGrid isLoading={isLoading} charecters={items} />
    </div>
  );
}

export default App;
