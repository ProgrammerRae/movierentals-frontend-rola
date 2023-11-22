import axios from "axios";

export const getMovies = async (genre, title) => {
  const data = JSON.stringify({
    genre, title
  })

  try {
    const result = await axios.post("http://localhost:3000/api/movies/list", data, {headers: { 'Content-Type': 'application/json' }});
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieByFilter = async () => {
  try {
    const result = await axios.get("http://localhost:3000/api/movies/genre");
    return result.data;
  }catch(error){
    console.log(error);
  }
}

export const getUserFavorite = async()=>{

}