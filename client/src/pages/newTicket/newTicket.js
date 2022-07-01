import "./style-modules.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
export function NewTicket() {
    const navigate = useNavigate()
    const [ticket, setTicket] = useState({
        name: "",
        email: "",
        subject: "",
        description: "",
    })
    //Changes of inputs
    function handleChange(e){
        setTicket({...ticket, [e.target.name]: e.target.value})
        console.log(ticket)
    }
    //Post ticket on data base
    async function handleSubmit(){
        try{
            api.post("/ticket/new", {...ticket})
            setTimeout(navigate("/"), 1000)
            
        } catch(err){
            console.log(err)
        }
    }
    return ( 
    <section className="new-ticket">
        <h2> Create a new Ticket</h2>
        <section className="form-section">
            <form onSubmit={handleSubmit} className="form-section" >
            <label htmlFor="email" className="input-label">Email</label>
                <input 
                    placeholder="email"
                    name="email"
                    value={ticket.email}
                    onChange={handleChange}
                    className="input"
                />
                <label htmlFor="name" className="input-label">Full Name</label>
                <input 
                    placeholder="Your Name"
                    name="name"
                    value={ticket.name}
                    onChange={handleChange}
                    className="input"
                />
                <label htmlFor="tile" className="input-label">Ticket Title</label>
                <input 
                    placeholder="Ticket Title"
                    name="subject"
                    value={ticket.subject}
                    onChange={handleChange}
                    className="input"
                />
                <label htmlFor="description" className="input-label">How can us help you?</label>
                <input 
                    placeholder="Ticket"
                    name="description"
                    value={ticket.description}
                    onChange={handleChange}
                    className="input-ticket"
                />
                <button type="submit">Submit</button>
            </form>
        </section>
            
    </section> 
    );
}

