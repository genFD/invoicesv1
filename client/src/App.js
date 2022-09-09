import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Detail, EditInvoice, NewInvoice } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/editinvoice/:id" element={<EditInvoice />} />
        <Route path="/newinvoice" element={<NewInvoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
