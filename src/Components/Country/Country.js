// import './Country.css'
import { useParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Country = () => {
 


  let { name } = useParams();
  const [country, setCountry] = useState();
  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then((res) => {
      const chosenCountry = res.data;
      setCountry(chosenCountry);
    });
  });
  return (
    <>
      <Heading />
      <div className="country__wrapper" >
        {country &&
          country.map((el) => {
            const {
              numericCode,
              flag,
              name,
              nativeName,
              population,
              region,
              subregion,
              capital,
              topLevelDomain,
              currencies,
              languages,
              borders
            } = el;
            return (
              <>
                <Link to="/">
                  <button className="country__button">Back</button>
                </Link>
                <div className="country__details" key={numericCode}>
                  <div className="country__flag">
                    <img src={flag} alt={name} />
                  </div>
                  
                              <div className="country__title">
                              <h1 className="country__name">{name}</h1>
                              </div>
                              <div className="country__columnleft">
                                    
                                    <h3 className="country__details">Native Name: {nativeName}</h3>
                                    <h3 className="country__details">Population: {population}</h3>
                                    <h3 className="country__details">Region: {region}</h3>
                                    <h3 className="country__details">Sub Region: {subregion}</h3>
                              </div>
                              <div className="country__columnright">
                                    <h3 className="country__details">Capitol: {capital}</h3>
                                    <h3 className="country__details">Top Level Domain: {topLevelDomain}</h3>
                                    <h3 className="country__details">Currencies: {currencies[0].name}</h3>
                                    <h3 className="country__details">Languages: {languages[0].name} </h3>
                              </div>
                  

                              <div className="country__bottom">
                                    <h3>Border Countries:</h3>
                                    <div className="country__borderlist">
                                        {borders.map((border)=>{
                                          return(
                                            <u key={border}>
                                            <li className="country__border-elements">{border}</li>
                                            </u> 
                                          
                                          )
                                        })}
                                  </div>   
                            </div>
                   
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Country;
