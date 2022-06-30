import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { feshDesk } from "../../api/freshDesk";
import {Link} from "react-router-dom"
import "./style-modules.css"
import edit from "../../img/edit.png"
export function Tickets() {
    const [ticket, setTicket] = useState([])
    const [freshDesk, setFreshDesk] = useState([])
    
    console.log(freshDesk)
    useEffect(() =>{
        async function getTickets(){
            const response = await api.get("http://localhost:4000/ticket/get")
            setTicket(response.data)
        }
        getTickets()
    }, [])

    useEffect(() =>{
        async function getTickets(){
            const response = await feshDesk.get()
            setFreshDesk(response.data)
        }
        getTickets()
    }, [])
    console.log(freshDesk)
    return ( 
        <section className="tickets">
            <div className="allTickets">
                <h1>FAQ<small>({ticket.length})</small></h1>
                <hr/>
                {ticket.map((currentTicket) =>{
                    return(
                        <article className="single-ticket">
                            <h5>Titulo: {currentTicket.title}</h5>
                            <small>Autor: {currentTicket.name}</small>
                            <p>{currentTicket.ticket}</p>
                        
                            <Link to={`/edit/${currentTicket._id}`} ><button className="edit-button"><img src={edit} alt="edit" className="edit-img"/></button></Link>
                            <button onClick={
                                async function Delete(){
                                    await api.delete(`http://localhost:4000/ticket/delete/${currentTicket._id}`)
                                    }
                                }>
                            Delete
                            </button>
                        </article>
                    )
                })}
            </div>
            <div className="links">
                <h1>Loupen Tickets</h1>
                <article>Create a ticket</article>
            </div>
            
        </section>
     );
}
