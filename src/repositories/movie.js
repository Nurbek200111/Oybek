import repository, { baseUrl, bearerToken } from "./repository";

class Movie {
  async getMoviesByName(name) {
    const endPoint = `movie/${name}`;
    const movies = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: bearerToken,
        },
      })
      .then((ress) => {
        return ress.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
    return movies;
  }
}
export default new Movie();
