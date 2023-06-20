import React from 'react'
import ShowsCardComponent from './ShowsCardComponent'

export default function ShowsListComponent(props) {
  return (
    <div className='row'>
<ShowsCardComponent showList={props.showList}/>
    </div>
  )
}
