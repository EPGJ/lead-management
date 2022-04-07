import { BrowserRouter, Routes, Route} from "react-router-dom";

import Leads from "./pages/leads/Leads";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
