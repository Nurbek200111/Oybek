import repository, { baseUrl, bearerToken } from "./repository";

class TvShow {
  async getShowByName(name) {
    const endPoint = `tv/${name}`;
    const series = await repository
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
    return series;
  }
}

export default new TvShow();
