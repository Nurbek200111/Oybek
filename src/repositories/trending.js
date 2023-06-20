import repository, { baseUrl, bearerToken } from "./repository";

class Trending {
  async getTrendingMovieDay() {
    const endPoint = "trending/movie/day";
    const trendingMovie = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: bearerToken,
        },
      })
      .then((ress) => {
        console.log(ress.data.results);
        return ress.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
    return trendingMovie;
  };


  async getTrendingMovieWeek() {
    const endPoint = "trending/movie/week";
    const trendingMovie = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: bearerToken,
        },
      })
      .then((ress) => {
        console.log(ress.data.results);
        return ress.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
    return trendingMovie;
  };
}

export default new Trending();
