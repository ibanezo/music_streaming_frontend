import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox.jsx';
import SongListingItem from './SongListingItem.jsx';
import './SongListingItem.css';
import './Main.css';

function Main() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:8080/songs")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
                )
            }, 
        [])
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="Main">
                    <div id="bg">
                    <img src="/background1.jpg" alt=""></img>
                    </div>
                    <SearchBox items={items} className="search"/> 
                    <SongListingItem items={items} className="songs"/>
                </div>
            );
        }
}

export default Main;
