import {useState} from 'react'
import SearchPrice  from './components/SearchPrice'

import './App.css'
import FlightGrid from './components/FlightGrid'
import Flybondi from './assets/Flybondi.png'


function FlightApp() {
  
  const [ price, setPrice ] = useState('')

  const onAddCategory = (newPrice) => {
    setPrice(newPrice)
  }

  return (
    <>
     
      <img src={Flybondi} className='imagen'/>
     
      <SearchPrice 
        onNewPrice={(value) => onAddCategory(value)}
       />

       {
        <FlightGrid 
            key={price}
            price={price}
          />
       }
    </>
  )
}

export default FlightApp