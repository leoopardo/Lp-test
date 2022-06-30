import "./style-modules.css"
import logo from "../../img/loupen-logo.png"
export function NavBar() {
    return ( 
        <section className="NavBar">
            <img src={logo} alt="logo" className="Logo"/>
        </section>
     );
}
