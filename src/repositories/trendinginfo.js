import repository, { baseUrl, bearerToken } from "./repository";

class TrendingInfo {
  async getTrendingMovieInfo(id) {
    const endPoint = `movie/${id}`;
    const trendingMovieInfo = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: bearerToken,
        },
      })
      .then((ress) => {
        console.log(ress.data);
        return ress.data

      })
      .catch((err) => {
        console.log(err);
      });
    return trendingMovieInfo;
  }
}
export default new TrendingInfo();
