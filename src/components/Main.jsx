import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox.jsx';
import SongListingItem from './SongListingItem.jsx';
import './SongListingItem.css';
import './Main.css';

function Main() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // var items2 = [
    //     {
    //         "name": "Led Zeppelin - Stairway To Heaven (Official Audio)",
    //         "artist": "Led Zeppelin",
    //         "albumType": "single",
    //         "image": "https://i1.sndcdn.com/artworks-000127380203-93pa4d-t500x500.jpg",
    //         "releaseDate": "1971-11-08",
    //         "releaseDatePrecision": "day",
    //         "path": "C:\\Users\\Shterjo\\Desktop\\Graduation Thessis - Martin Shterjoski 2019\\songs\\Led Zeppelin - Stairway To Heaven (Official Audio).mp3"
    //     },
    //     {
    //         "name": "Led Zeppelin - Whole Lotta Love (HQ)",
    //         "artist": "Led Zeppelin",
    //         "albumType": "single",
    //         "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Wllsingle.jpg/220px-Wllsingle.jpg",
    //         "releaseDate": "1969-11-07",
    //         "releaseDatePrecision": "day",
    //         "path": "C:\\Users\\Shterjo\\Desktop\\Graduation Thessis - Martin Shterjoski 2019\\songs\\Led Zeppelin - Whole Lotta Love (HQ).mp3"
    //     }
    // ];
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
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    return (
        <div className="Main">
            <div id="bg">
                <img src="/background1.jpg" alt=""></img>
            </div>
            <SearchBox items={items} className="search" />
            {/* <SongListingItem items={items2} className="songs" /> */}
        </div>
    );
    // }
}

export default Main;
