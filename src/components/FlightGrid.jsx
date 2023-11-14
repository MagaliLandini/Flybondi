
import { useEffect,useState } from "react";
import { useFetchFlights } from "../hooks/useFetchFlights";
import FlightItem  from "./FlightItem";
import './flightGrid.css';

const FlightGrid = ({ price }) => {
    const [flightsFinded, setFlightsFinded] = useState([]);
    let { flights, isLoading } = useFetchFlights();

    useEffect(() => {
        if (!isLoading && price!=''  && flights && flights.length > 0){
            setFlightsFinded(flights.filter(flight => flight.price <= price)); 
          }else{
            setFlightsFinded(flights)
          }
    },[price, flights])
    return (
        <>
            <h3>Vuelos disponible por el precio de ${ price }</h3>

            {
                isLoading && ( <h2>Cargando...</h2>) 
            }

            <div className='gridContainer'>
                { 
                    flightsFinded.map( (flight) => (
                    <FlightItem
                        key={flight.data}
                        {...flight }
                    />
                ))
                }
            </div>
        </>

      );
}
 
export default FlightGrid;