import './styles/App.css'

import {Route, Routes} from "react-router-dom";

import Homepage from "./components/Homepage";
import AddPatient from "./components/Patients/Add";
import ListPatients from "./components/Patients/List";
import EditPatients from "./components/Patients/Edit";



function App() {

  return (
    <div className={"flex flex-col items-center h-screen bg-secondary"}>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add" element={<AddPatient />} />
            <Route path="/list" element={<ListPatients />} />
            <Route path="/edit/:pId" element={<EditPatients />} />
        </Routes>
    </div>
  )
}

export default App
