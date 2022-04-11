import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
// import { Redirect } from "react-router";
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/addLead" element={<AddLead />} />
        <Route path="/" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
