const {Schema, model, default: mongoose} = require("mongoose");

const ticketSchema = new Schema(
    {
    email: [{type: String, require: true, trim: true}],
    name: {type: String, require: true, trim: true},
    subject: {type: String, require: true, maxLength: 100},
    description: {type: String, require: true, maxLength: 400},
    id: {type: Number}
    }, 
    {timestamps: true}
    )

const TicketModel = model("Ticket", ticketSchema);

module.exports = TicketModel