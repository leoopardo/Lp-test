const {Schema, model, default: mongoose} = require("mongoose");

const ticketSchema = new Schema(
    {
    email: {type: String, require: true, trim: true, match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/},
    name: {type: String, require: true, trim: true},
    ticket: {type: String, require: true, maxLength: 400},
    answers: [
        {email: {type: String, require: true, trim: true},
        name: {type: String, require: true, trim: true},
        ticket: {type: String, require: true, maxLength: 400}}
    ]
    }, 
    {timestamps: true}
    )

const TicketModel = model("Ticket", ticketSchema);

module.exports = TicketModel