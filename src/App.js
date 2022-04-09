import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

import Leads from "./pages/leads/Leads";
import AddLead from "./pages/addLead/AddLead"
import Nav from "./components/nav/Nav";
import SignIn from "./pages/signIn/SignIn";
import SingUp from "./pages/signUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/addLead" element={<AddLead />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
