import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const FlightItem = ({ price, date,destination, origin, disponibilidad}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
         FlyBondi
        </Typography>
        <Typography variant="h5" component="div" color="white">
             Origen {origin} - Destino {destination}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white">
            Fecha de Salida {date}
        </Typography>
        <Typography variant="body2" color="white">
          $ {price}
          <br />
          Lugares disponibles {disponibilidad}
        </Typography>
      </CardContent>
    </Card>
  );
}

 
export default FlightItem;