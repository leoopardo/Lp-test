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
    async function freshToDataBasePost(){
        for(let i = 0; i < freshDesk.length; i++){
            if(ticket.some(e => e.id === freshDesk[i].id)){
                console.log('tem') 
                continue
                };  
            if((freshDesk[i].id > 22226) && (freshDesk[i].id < 22287)){
                    await api.post("/ticket/new", {
                        "email": freshDesk[i].cc_emails,
                        "name": freshDesk[i].subject,
                        "subject": freshDesk[i].id,
                        "description": freshDesk[i].id,
                        "id": freshDesk[i].id
                    });       
                };      
            };
            window.location.reload()
    };
    console.log(freshDesk)

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
                                <small>Autor: {currentTicket.name}</small>
                            </article>
                        </Link>

                    )
                })}
            </div>
            <div className="links">
                <h1>Loupen Tickets</h1>
                <Link to="/new-ticket" className="create-a-ticket"><h3 className="create-a-ticket">New ticket</h3></Link>
                <button onClick={freshToDataBasePost} className="update-and-import">Uptade and import tickets</button>
            </div>
            
        </section>
     );
}
