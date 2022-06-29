const TicketModel = require("../models/Ticket.model")

const router = require("express").Router()

//Create ticket
router.post("/new", async (req, res) =>{
    try{
        const newTicket = await TicketModel.create({
            email: req.body.email,
            name: req.body.name,
            ticket: req.body.ticket
        });
        res.status(200).json(newTicket)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

//Read all tickets
router.get("/get", async (req, res) =>{
    try{
        const allTickets = await TicketModel.find();
        return res.status(200).json(allTickets)
    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

//Read a ticket by email
router.get("/get/:email", async (req, res) =>{
    try{
        const allTickets = await TicketModel.find({email: req.params.email});
        return res.status(200).json(allTickets)
    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

//Update a ticket

router.patch("/update/:id", async (req, res) =>{
    try{
        const updatedTicket = await TicketModel.findOneAndUpdate(
            {_id: req.params.id},
            {... req.body},
            {runValidators: true, new: true}
        );
        res.status(200).json(updatedTicket)

    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

//Delete a ticket

router.delete("/delete/:id", async (req, res) =>{
   try{
    const ticketDeleted = await TicketModel.findByIdAndDelete(
    {_id: req.params.id}
   );
    res.status(200).json(ticketDeleted)
   } 
   catch(err){
    console.log(err);
    res.status(500).json(err);
   }
})
module.exports = router