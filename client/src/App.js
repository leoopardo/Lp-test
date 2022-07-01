import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Tickets } from './pages/tickets/tickets';
import { NavBar } from './components/navBar/navBar';
import { NewTicket } from './pages/newTicket/newTicket';
import { EditTicket } from './pages/editTicket/editTicket';
import { TicketPage } from './pages/ticketPage/ticketPage';
import { Footer } from './components/footer/footer';


function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Tickets/>}/>
        <Route path="/new-ticket" element={<NewTicket/>}/>
        <Route path="/edit/:id" element={<EditTicket/>}/>
        <Route path="/ticket/:id" element={<TicketPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
