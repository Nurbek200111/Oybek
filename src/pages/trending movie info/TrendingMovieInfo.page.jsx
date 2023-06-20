import React, { useEffect, useState } from "react";
import { imgBaseUrl } from "../../repositories/repository";
import { useParams } from "react-router-dom";
import trendinginfo from "../../repositories/trendinginfo";
import "./TrendingMovieInfo.css";

export default function TrendingMovieInfo() {
  const [trendingMovieInfo, setTrendingMovieInfo] = useState({});
  const { id } = useParams();
  async function getTrendingMovieInfo(id) {
    const currentTrendingMovieInfo = await trendinginfo.getTrendingMovieInfo(
      id
    );
    setTrendingMovieInfo(currentTrendingMovieInfo);
  }

  useEffect(() => {
    getTrendingMovieInfo(id);
  }, []);

  return (
    <div>
      {trendingMovieInfo && (
        <div>
          <img
            className="backdrop_path-img"
            src={imgBaseUrl + trendingMovieInfo.backdrop_path}
            alt={trendingMovieInfo.title}
          />
          <div className="backdrop_path-curtain">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <img className="MovieInfo-poster_path" src={imgBaseUrl + trendingMovieInfo.poster_path} alt="" />
                </div>
                <div className="col-9">
                  <h1 className="MovieInfo-title">{trendingMovieInfo.title} <span>({trendingMovieInfo.release_date})</span></h1>
                  <h4 className="MovieInfo-tagline"><b>{trendingMovieInfo.tagline}</b></h4>
                  <b className="MovieInfo-overview">Overview</b>
                  <p className="MovieInfo-desc">{trendingMovieInfo.overview}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
