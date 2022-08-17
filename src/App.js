import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Overview, Revenue, Users } from './pages/Overview';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './pages/Reports';
import { Message, MessageOne, MessageTwo } from './pages/Message';

import { useState } from 'react'
import { Team } from './pages/Team';
function App() {
  const [sidebar, setSidebar] = useState(false)

  const toggle = () => {
    setSidebar(!sidebar);
  }

  return (
    <div className="App">
      <Router>
        <Sidebar sidebar={sidebar} toggle={toggle} />
        <Routes>
          <Route path="/overview" exact element={<Overview sidebar={sidebar}/>} ></Route>
          <Route path="/overview/users" exact element={<Users sidebar={sidebar}/>} ></Route>
          <Route path="/overview/revenue" exact element={<Revenue sidebar={sidebar}/>} ></Route>
          <Route path="/reports" exact element={<Reports sidebar={sidebar}/>} ></Route>
          <Route path="/reports/reports1" exact element={<ReportsOne sidebar={sidebar}/>} ></Route>
          <Route path="/reports/reports2" exact element={<ReportsTwo sidebar={sidebar}/>} ></Route>
          <Route path="/reports/reports3" exact element={<ReportsThree sidebar={sidebar}/>} ></Route>
          <Route path="/messages" exact element={<Message sidebar={sidebar}/>}></Route>
          <Route path="/messages/messages1" exact element={<MessageOne sidebar={sidebar}/>} ></Route>
          <Route path="/messages/messages2" exact element={<MessageTwo sidebar={sidebar}/>} ></Route>
          <Route path="/team" exact element={<Team sidebar={sidebar}/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
