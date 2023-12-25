import { useState } from "react";
import { movies } from "../Data/fakeMovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";

const Movies = () => {
  const [movieList, setMovies] = useState(movies);
  const [state, setState] = useState({
    pageSize: 4,
    currentPage: 1,
  });

  const handlePageChange = (page) => {
    setState((pre) => ({
      ...pre,
      currentPage: page,
    }));
  };

  const removeMovie = (index) => {
    const updatedItems = [...movieList];
    updatedItems.splice(index, 1);
    setMovies(updatedItems);
  };

  const likeMove = (index) => {
    const likeMovieList = [...movieList];
    likeMovieList[index] = { ...likeMovieList[index] };
    likeMovieList[index].like = !likeMovieList[index].like;
    setMovies(likeMovieList);
  };

  const Like = ({ isLike, id }) => {
    return (
      <FontAwesomeIcon
        className="m-5 "
        icon={isLike ? solidHeart : faHeart}
        size="lg"
        style={{ color: "red" }}
        onClick={() => {
          likeMove(id);
        }}
      />
    );
  };

  const movieData = movieList.map((e, index) => {
    return (
      <tr
        key={index}
        className="bg-white  dark:bg-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
        >
          {e.title}
        </th>
        <td className="px-6 py-4">{e.genre.name}</td>
        <td className="px-6 py-4">{e.numberInStock}</td>
        <td className="px-6 py-4">{e.dailyRentalRate}</td>
        <td className="px-6 py-4">
          <Like isLike={e.like} id={index} />
        </td>
        <td className="px-6 py-4 text-right">
          <button
            onClick={() => {
              removeMovie(index);
            }}
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded "
            value={index}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-t-lg ml-20 mr-20 mb-20 mt-20">
        <p className="px-6 py-4">
          Showing {movieList.length} movies in the database.
        </p>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-800">
          <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-100 dark:text-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                header
              </th>
              <th scope="col" className="px-6 py-3">
                header
              </th>
              <th scope="col" className="px-6 py-3">
                header
              </th>
              <th scope="col" className="px-6 py-3">
                header
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{movieData}</tbody>
        </table>
        <Pagination
          className="rounded-lg"
          itemCount={movieList.length}
          pageSize={state.pageSize}
          currentPage={state.currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Movies;
