// import "./Heading.css";
import {Link} from 'react-router-dom';
import {useState} from 'react';



const Heading = () => {

  const [isActive, setIsActive] = useState();

  const change =()=> {
    setIsActive(!isActive)
  }

  return (
    <>
      {/* <div className="heading__wrapper" onClick={change}  > */}
      <div className={isActive ? "heading__wrapper grey" : "heading__wrapper"}  >
        <Link style={{ textDecoration: 'none' }} to="/">
        <h2 className="heading__textleft">Where in the World?! </h2>
        </Link>
        
        <h2 className="heading__textright" onClick={change} >
          <i class="fas fa-moon heading__icon"></i>Dark Mode
        </h2>
      </div>
    </>
  );
};

export default Heading;
