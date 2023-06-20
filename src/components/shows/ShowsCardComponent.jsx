import React from 'react'
import { imgBaseUrl } from '../../repositories/repository'

export default function ShowsCardComponent(props) {
  return (
    props.showList.map((item,index)=>{
     return(
         <div key={index} className='col-3 my-3'>
         <div className="card">
            <img src={imgBaseUrl+item.poster_path} alt={item.name} />
            <b>{item.name}</b>
         </div>
    </div>
     )
    })
   )
}
