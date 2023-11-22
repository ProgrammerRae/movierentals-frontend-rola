import './movies.css'
import Card from '../components/card';
import Filter from '../components/filter';
import React, { useState, useEffect } from 'react'; 
import {getMovies} from '../api/movies';
import { getAllGenre } from '../api/genresapi';


export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState('')
 
  useEffect(() => {
    getMovies(selectedGenre, searchQuery).then(moviekineme => {
      setMovies(moviekineme);
    })
    getAllGenre().then(genreKineme => {
      setGenre(genreKineme);
    })
  }, [selectedGenre, searchQuery]);
  
  const filterData = {
    name: "genre",
    genre
  }

  const search = ()=> {
    getMovies(selectedGenre, searchQuery).then(moviekineme => {
      setMovies(moviekineme);
    })
  }
  
  const movies1 = ()=>{
    const movieCards = [];
    for(let i = 0; i < 7; i++){
        if(movies[i]){
            movieCards.push(<Card props={movies[i]} key={movies[i]._id}/>)
        }
    }
    return movieCards
}

  const movies2 = ()=>{
    const movieCards = [];
    for(let i = 0; i < 7; i++){
        if(movies[i]){
            movieCards.push(<Card props={movies[i]} key={movies[i]._id}/>)
        }
    }
    return movieCards
}

  const movies3 = ()=>{
    const movieCards = [];
    movies.forEach(movie =>  movieCards.push(<Card props={movie} key={movie._id}/>))
    return movieCards
  }
  const submitSearch = (event) =>{
    setSearchQuery(event.target.value);
    console.log(event.target.value)
  }
  const handleFilterChange = (value) => {
    setSelectedGenre(value)
    console.log(value)
  }
  return (
    <section id='movies'>
        <div className='movie-search'>
            <label htmlFor="search">SEARCH MOVIES</label>
            <input type="search" name="search" id="search" placeholder='Kineme The Movie' value={searchQuery} onChange={submitSearch} onClick={()=>search()}/>
            <button onClick={()=>search()}>Search</button>
        </div>
        <div className='filter-container'>
          <Filter props={filterData} onChange={handleFilterChange}/>
            <button>GO</button>
        </div>
        <h1>FEATURED MOVIES</h1>
        <div className='movie-container'>
            {movies && movies1()}
            
        </div>
        <h1>New Movies</h1>
        <div className='movie-container'>
            {movies && movies2()}
        </div>
        <h1>Movies</h1>
        <div className='movie-container'>
            {movies && movies3()}
        </div>
    </section>
  )
}
