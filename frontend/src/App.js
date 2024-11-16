import react from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactManagement from "./pages/ContactManagement";


function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<ContactManagement /> } />
      </Routes>
    </Router>
   </>
  );
}

export default App;
