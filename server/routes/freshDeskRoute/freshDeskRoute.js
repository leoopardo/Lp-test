const router = require("express").Router()

router.get("https://loupendemo.freshdesk.com/api/v2/tickets", {
    headers: {
        Authorization: "NqkNg2tywkOjFqEVzu7E",
    },
} )