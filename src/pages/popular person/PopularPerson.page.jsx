import React, { useEffect, useState } from 'react'
import popularperson from '../../repositories/popularperson'
import PersonListComponent from '../../components/persons/PersonListComponent'

export default function PopularPerson() {
    const [personList,setPersonList]= useState([])
    async function getPersonByName(){
        const currentPerson = await popularperson.getPersonByName()
        setPersonList(currentPerson)
    }
    useEffect(()=>{
        getPersonByName()
    },[])
  return (
    <div>
         <div className="container">
            <PersonListComponent personList={personList}/>
         </div>
    </div>
  )
}
