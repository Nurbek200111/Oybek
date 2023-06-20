import React from 'react'
import ContentCardComponent from './ContentCardComponent'

export default function ContentListComponent(props) {
  return (
    <div className='row'>
    <ContentCardComponent movieList={props.movieList}/>
    </div>
  )
}
