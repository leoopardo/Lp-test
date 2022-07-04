import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import edit from "../../img/edit.png"
import axios from "axios";
import "./style-modules.css"
import { api } from "../../api/api";

export function TicketPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [ticket, setTicket] = useState([]);

    //get a specific ticket
    useEffect(() =>{
        async function getTicket(){
            try{
                const response = await api.get(`/ticket/getById/${params.id}`)
                setTicket(response.data)
            } catch(err){
                console.log(err);
            }
        }
        getTicket()
    },[params.id])
    //delete the ticket
    async function handleDelete(){
        try{
            await api.delete(`/ticket/delete/${params.id}`)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }
    //post tickets to destiny freshDesk
    function handlePostOnFreshDesk(){
        axios.post("https://loupen-dev.freshdesk.com/api/v2/tickets", {
            email: ticket.email,
            subject: ticket.subject,
            description: ticket.description
    }, {
            
                    headers: {
                        Authorization: "Basic TTVIeXYxWWJrajhpd0tjQU1Mbmk6WA",   
                    }
                });
                window.alert("posted")
                navigate("/")
    }
    
    console.log(ticket)
    return ( 
        <section className="ticket">
            <div className="ticket-box">
                <h1>{ticket.subject}</h1>
                <p>Created by: {ticket.name}<small>{ticket.email}</small></p>
                <small>Modified on: {Date(ticket.updatedAt)}</small>
                <hr/>
                <p>{ticket.description}</p>
                <hr/>
                <div className="ticket-buttons">
                  <button onClick={handleDelete} className="delete-button">Delete</button>
                  <Link to={`/edit/${ticket._id}`} ><button className="edit-button"><img src={edit} alt="edit" className="edit-img"/></button></Link> 
                  <button onClick={handlePostOnFreshDesk} className="post-button">Send ticket to FreshDesk</button> 
                </div>
                

            </div>
        </section>
     );
}
