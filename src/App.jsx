// App.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { fetchMovies, setSearchTerm } from "./redux/movieSlice";

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const searchTerm = useSelector((state) => state.movies.searchTerm);

  useEffect(() => {
    dispatch(fetchMovies(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Movie.Mo" onSearch={(term) => dispatch(setSearchTerm(term))} />
      <div className="text-start my-8 mx-5">
        <h2 className="text-2xl font-semibold">Show your favorite movies</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;