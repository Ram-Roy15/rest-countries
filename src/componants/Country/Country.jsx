import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, cca2, area, coatOfArms } = country;
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    setVisited(!visited);
    // setVisited(true);
  };
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Code: {cca2}</p>
      <p>Area: {area} </p>
      <button onClick={handleClick}>{visited ? "visited" : "Going"}</button>
      {
        visited ? (
          <p>You have visited this country</p>
        ) : (
          <p>You have not visited this country</p>
        )
        // visited && "I have visited this country"
      }
    </div>
  );
};

export default Country;
