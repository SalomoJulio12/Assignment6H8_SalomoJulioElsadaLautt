// components/Movie.jsx
const Movie = ({ movie }) => (
  <div className="bg-white shadow-md rounded overflow-hidden transform hover:scale-105 transition-transform duration-200">
    <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover" />
    <div className="p-2 text-center bg-orange-500 text-white font-semibold">
      {movie.Title}
    </div>
  </div>
);

export default Movie;