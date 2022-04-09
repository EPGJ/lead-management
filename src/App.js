import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

import Leads from "./pages/leads/Leads";
import AddLead from "./pages/AddLead/AddLead"

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/leads" element={<Leads />} />
        <Route path="/addLead" element={<AddLead />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
