import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataCollection from "./page/dataCollection/DataCollection";
import EditData from "./page/editData/EditData";
import Home from "./page/home/Home";
import InputData from "./page/inpuData/InputData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tambah-jadwal" element={<InputData />} />
        <Route path="/edit-jadwal/:id" element={<EditData />} />
        <Route path="/jadwal" element={<DataCollection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
