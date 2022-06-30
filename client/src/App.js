import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Tickets } from './pages/tickets/tickets';
import { NavBar } from './components/navBar/navBar';


function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Tickets/>}/>
        <Route path="/newTicket"/>
        <Route path="/edit/:id"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
