import "./style-modules.css"
import logo from "../../img/loupen-logo.png"
import { Link } from "react-router-dom";
export function NavBar() {
    return ( 
        <section className="NavBar">
            <Link to="/"><img src={logo} alt="logo" className="Logo"/></Link>
        </section>
     );
}
