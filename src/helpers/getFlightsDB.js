
import datos from '../../db.json'
export const getFlightsDB = async () => {

    const gifs = datos.map( data  => ({
            price: data.price,
            date:data.data,
            destination: data.destination,
            origin: data.origin,
            disponibilidad : data.availability
            
        }))
    return gifs;

    }