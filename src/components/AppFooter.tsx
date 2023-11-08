import '../assets/css/AppFooter.css'
import '../assets/css/global.css'
import {Link} from "react-router-dom";
import {FaFacebookSquare,FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa';


function AppFooter(){
return(
  <footer className="container">
    <section className="left-footer links">
      <Link to="/">Location</Link>
      <Link to="/">Contact</Link>
      {/*<Link to="/">directions</Link>*/}
    </section>
      <span className={"mid-footer"} style={{fontSize:15, textAlign:"center"}}> Legit Bookstore Copyright 2023. All Rights Reserved </span>

      <section className={"right-footer"}>
          <section className="social-media-icons">
          <Link to="/" className="button"><FaFacebookSquare/></Link>
          <Link to="/" className="button"><FaInstagramSquare/></Link>
          <Link to="/" className="button"><FaTwitterSquare/></Link>
      </section>
      </section>

  </footer>
)
}
export default AppFooter;
