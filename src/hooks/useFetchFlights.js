

import { useEffect, useState} from 'react'
import { getFlightsDB } from '../helpers/getFlightsDB';

export const useFetchFlights = () => {

    const [flights, setFlights] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getFlights = async () => {
        let newFlights = await getFlightsDB();
        
        setFlights(newFlights)
        setLoading(false)
    }

    useEffect(() => {
      getFlights()
    }, [])



  return {
    flights,
    isLoading
  }
}