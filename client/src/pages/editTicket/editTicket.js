import "./style-modules.css"
import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { api } from "../../api/api";
export function EditTicket() {
    const params = useParams()
    const navigate = useNavigate()
    const [editedTicket, setEditedTicket] = useState({
        name: "",
        email: "",
        subject: "",
        description: "",
    })
    //Changes of inputs
    function handleChange(e){
        setEditedTicket({...editedTicket, [e.target.name]: e.target.value})
        console.log(editedTicket)
    }
    //Update ticket on data base
    async function handleSubmit(){
        try{
            api.patch(`/ticket/update/${params.id}`, {...editedTicket})
            setTimeout(navigate("/"), 1000)
            
        } catch(err){
            console.log(err)
        }
    }
    useEffect(() =>{
        async function getTicket(){
            try{
                const response = await api.get(`/ticket/getById/${params.id}`)
                setEditedTicket(
                {name: response.data.name,
                email: response.data.email,
                title: response.data.title,
                ticket: response.data.ticket,})
            } catch(err){
                console.log(err);
            }
        }
        getTicket()
    },[params.id])
    return ( 
    <section className="new-ticket">
        <section className="form-section">
            <form onSubmit={handleSubmit} className="form-section" >
            <label htmlFor="email" className="input-label">Email</label>
                <input 
                    placeholder="email"
                    name="email"
                    value={editedTicket.email}
                    onChange={handleChange}
                    className="input"
                />
                <label htmlFor="name" className="input-label">Full Name</label>
                <input 
                    placeholder="Your Name"
                    name="name"
                    value={editedTicket.name}
                    onChange={handleChange}
                    className="input"
                />
                <label htmlFor="subject" className="input-label">Ticket Title</label>
                <input 
                    placeholder="Ticket Title"
                    name="subject"
                    value={editedTicket.subject}
                    onChange={handleChange}
                    className="input"
                />
                <label htmlFor="description" className="input-label">How can us help you?</label>
                <input 
                    placeholder="Ticket"
                    name="description"
                    value={editedTicket.description}
                    onChange={handleChange}
                    className="input-ticket"
                />
                <button type="submit">Submit</button>
            </form>
        </section>
            
    </section> 
    );
}


