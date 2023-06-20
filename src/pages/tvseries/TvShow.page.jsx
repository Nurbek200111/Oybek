import React, { useEffect, useState } from 'react'
import tvshow from '../../repositories/tvshow'
import { useParams } from 'react-router-dom'
import ShowFilterComponent from '../../components/shows/ShowFilterComponent'
import ShowsListComponent from '../../components/shows/ShowsListComponent'

export default function TvShowPage() {
  const {title} = useParams()
  const [showList,setShowList] = useState([])
 async function getShowByName(title){
    const currentShow = await tvshow.getShowByName(title);
    setShowList(currentShow)
  }

  useEffect(()=>{
    getShowByName(title)
  },[title])
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-3">
               <ShowFilterComponent/>
            </div>
            <div className="col-9">
             <ShowsListComponent showList={showList}  />
            </div>
          </div>
        </div>
    </div>
  )
}
