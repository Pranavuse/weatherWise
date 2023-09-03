/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import axios from "axios";
import Result from "./Result";
import { DotSpinner } from '@uiball/loaders'

export default function WeatherSearch() {

    
    const[search, setSearch] = useState("Type here to search");
    const[weather, setWeather] = useState([]);
    const[loading, setLoading] = useState(false)
    
    const handleSearchChange=(event)=>{
        setSearch(event.target.value)
    }
     
    const delhi=()=>{
      console.log("delhi")
      setSearch('Delhi')
    }
    // useEffect(() => {
    //   console.log("Search state has changed:", search);
    // }, [search]); 

  const api_key="952c139d7515797a71e5d1ff61229211";

    const handleButtonClick=()=>{
      
        console.log("button clicked");

        if(search!==""&&search!=="Type here to search"){
        
          setLoading(true)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&id=524901&appid=${api_key}&units=metric`)
        .then(
          (response)=>{
                setWeather(response.data)
                console.log(response.data)
                setLoading(false)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
        }
        else{
            alert("Weather not found")
        }


    }

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-wrap mb-3">
          <button className="btn btn-outline-primary mx-3" onClick={delhi}>Delhi</button>
          <button className="btn btn-outline-primary mx-3">New York</button>
          <button className="btn btn-outline-primary mx-3">Kolkata</button>
          <button className="btn btn-outline-primary mx-3">London</button>
          <button className="btn btn-outline-primary mx-3">UK</button>
        </div>

        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder={search}
            list="datalistOptions"
            onChange={handleSearchChange}
          />
          <datalist id="datalistOptions">
            <option value="San Francisco"/>
            <option value="New York"/>
            <option value="Seattle"/>
            <option value="Los Angeles"/>
            <option value="Chicago"/>
         </datalist>
          <button className="btn btn-primary" type="button" onClick={handleButtonClick}>
            Search
          </button>
        </div>
        {loading ? <DotSpinner size={45} color="#231F20" /> : null}
    
    <Result weatherData={weather}/>
        
    </div>
    </div>
  );
}
