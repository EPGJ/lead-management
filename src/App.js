import { BrowserRouter, Routes, Route} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';

import Leads from "./pages/leads/Leads";
import AddLead from "./pages/addLead/AddLead"
import SignIn from "./pages/signIn/SignIn";
import SingUp from "./pages/signUp/SignUp";



function App() {
  return (
    <BrowserRouter>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <CssBaseline />

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
