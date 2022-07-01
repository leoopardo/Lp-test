import { useState, useEffect } from "react";
import { api } from "../../api/api";
import {Link} from "react-router-dom"
import "./style-modules.css"
import axios from "axios";
export function Tickets() {
    //data base state
    const [ticket, setTicket] = useState([]);
    //origin freshDesk state
    const [freshDesk, setFreshDesk] = useState([]);
    
    //get tickets from dataBase
    useEffect(() =>{
        try{
            async function getTickets(){
                const response = await api.get("http://localhost:4000/ticket/get");
                setTicket(response.data);
            }
            getTickets();

        } catch(err){
            console.log(err);
        }

    }, []);
    console.log(ticket);

    //get tickets from origin freshDesk
    useEffect(() =>{
        try{
            async function getTickets(){
                const response = await axios.get("https://loupendemo.freshdesk.com/api/v2/tickets", {
                    headers: {
                        Authorization: "Basic TnFrTmcydHl3a09qRnFFVnp1N0U6WA",   
                    }
                })
                setFreshDesk(response.data);
            }
            getTickets();
            
        } catch(err){
            console.log(err);
        }
        
    }, []);

    //Post the freshDesks tickets in the data base
    function freshToDataBasePost(){
            freshDesk.map((c) =>{
                if((c.id > 22226) && (c.id < 22287)){
                    if(ticket.includes(c.id.toString()) === false){
                         api.post("/ticket/new", {
                        "email": c.cc_emails,
                        "name": c.subject,
                        "subject": c.id,
                        "description": c.id
                    });         
                    }         
                };
            })
                
        
    };
    console.log(freshDesk)

    //post tickets to destiny freshDesk
    function handlePostOnFreshDesk(){
        axios.post("https://loupen-dev.freshdesk.com/api/v2/tickets", {
            email: "teste@teste.com",
            subject: "ticket teste",
            description: "descrição teste"
    }, {
            
                    headers: {
                        Authorization: "Basic TTVIeXYxWWJrajhpd0tjQU1Mbmk6WA",   
                    }
                });
                window.alert("posted")
    }
    

    return ( 
        <section className="tickets">
            <div className="allTickets">
                <h1>FAQ<small>({ticket.length})</small></h1>
                <hr/>
                {ticket.map((currentTicket) =>{
                    return(
                        <Link to={`/ticket/${currentTicket._id}`} style={{textDecoration: "none", color: "black"}}>
                            <article className="single-ticket">
                                <h5>{currentTicket.subject}</h5>
                                <small>ticket number: {currentTicket.name}</small>
                            </article>
                        </Link>

                    )
                })}
            </div>
            <div className="links">
                <h1>Loupen Tickets</h1>
                <Link to="/new-ticket" className="create-a-ticket"><h3 className="create-a-ticket">New ticket</h3></Link>
                <button onClick={freshToDataBasePost} className="update-and-import">Uptade and import tickets</button>
                <button onClick={handlePostOnFreshDesk} className="update-and-import">Send all tickets to FreshDesk</button>
            </div>
            
        </section>
     );
}
