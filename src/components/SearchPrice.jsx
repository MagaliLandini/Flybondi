import { Button, TextField } from "@mui/material";
import { useState } from "react";
import '../App.css'
const SearchPrice = ({ onNewPrice }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
      console.log(event)
        let {target}= event;
        setInputValue(target.value)
        if(inputValue.trim().length <= 1) return;
    }

    const onSubmit = (event) => {
      event.preventDefault();
      onNewPrice(inputValue.trim())
      setInputValue('')
    }

    return ( 

        <form >
              <input className="input" 
              label="Buscar vuelo" 
              placeholder="Buscar vuelo por precio" 
              onChange={(val) => onInputChange(val)}/>
              
              <Button className="des" variant="contained" onClick={onSubmit}>Buscar</Button>
        </form>
     );
}
 
export default SearchPrice;