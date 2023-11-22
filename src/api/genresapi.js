import axios from "axios";

export const getAllGenre = async () => {
  try {
    const result = await axios.get("http://localhost:3000/api/genres");
    return result.data;
  } catch (error) {
    console.log(error);
  }
}



