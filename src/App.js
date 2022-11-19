import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [popularMovies, setPopularMovies]= useState([])

  useEffect(()=>{
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  },[])

  const PopularMovieList = () => {
    return popularMovies.map((movie,i)=>{
      return(
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" className="Movie-img" />
            <div className="Movie-date">{movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
      )
    })
  }

  const search = (q) =>{
    console.log({q});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SMovie</h1>
        <input
          type="text"
          placeholder="cari movie kesukaanmu...."
          className="Movie-search"
          onChange={({target}) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
