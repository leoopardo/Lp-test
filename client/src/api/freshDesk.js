import axios from "axios";

const apiURLs = {
    development: "https://loupendemo.freshdesk.com/api/v2/tickets",
    production: "https://loupendemo.freshdesk.com/api/v2/tickets",
};


const feshDesk = axios.create({
     baseURL: apiURLs[process.env.NODE_ENV],
     headers: {ApiKey: "NqkNg2tywkOjFqEVzu7E"}
                        });

export {feshDesk}