import React from 'react'
import PersonsCardComponent from './PersonsCardComponent'

export default function PersonListComponent(props) {
  return (
    <div className='row'>
        <PersonsCardComponent personList={props.personList}/>
    </div>
  )
}
