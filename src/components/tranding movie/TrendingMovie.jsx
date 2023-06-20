import React, { useEffect, useState } from "react";
import trending from "../../repositories/trending";
import { imgBaseUrl } from "../../repositories/repository";
import "./TrendingMovie.css";
import { Link } from "react-router-dom";
import { async } from "q";

export default function TrendingMovie() {
  const [trendingMovieList, setTrendingMovieList] = useState([]);

  const [rost, setRost] = useState(true)


  async function getTrendingMovie() {

    if(rost == true){
      todayFun()
    }

    if(rost == false){
      weekFun()
      console.log("salom");
    }
  }

   async function todayFun(){

    const currentTrendingMovie = await trending.getTrendingMovieDay();
    setTrendingMovieList(currentTrendingMovie);
    setRost(false)
  }

  async function weekFun(){
    const currentTrendingMovie = await trending.getTrendingMovieWeek();
    setTrendingMovieList(currentTrendingMovie);

  }

  useEffect(() => {
    getTrendingMovie();
  }, []);

  return (
    <div className="my-4">

    <div className="todayWeek m-2">
      Treding: 
      <button onClick={todayFun} className="m-2 btn btn-primary">Today</button>
      <button onClick={weekFun} className="m-2 btn btn-danger">This Week</button>
    </div>

      <div className="trending-movie-bgimg">
        <div className="trending-movie-flexing">
          {trendingMovieList &&
            trendingMovieList.map((item, index) => {
              return (
                <div className="trending-movie-flex-card" key={index}>
                  <Link style={{textDecoration:"none"}} to={`/movies/${item.id  }`}>
                    <div className="card border-0">
                      <img
                        className="trending-movie-img"
                        src={imgBaseUrl + item.poster_path}
                        alt={item.title}
                      />
                      <b>{item.title}</b>
                      <p>{item.release_data}</p>
                    </div>
                 </Link>
                  </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
