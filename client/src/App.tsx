import './styles/App.css'

import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";

import Homepage from "./components/Homepage";
import AddPatient from "./components/Patients/Add";
import ListPatients from "./components/Patients/ListPatients";
import EditPatients from "./components/Patients/Edit";
import DeletePatients from "./components/Patients/Delete";



function App() {
    const [users, setUsers] = useState<string[]>([])
    console.log(users)
    useEffect(() => {
        axios.get('http://localhost:5000/patients/')
            .then(res => {
                console.log(res.data)
            })

    }, [])


  return (
    <div className={"flex items-center justify-center h-screen bg-secondary"}>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add" element={<AddPatient />} />
            <Route path="/list" element={<ListPatients />} />
            <Route path="/edit" element={<EditPatients />} />
            <Route path="/delete" element={<DeletePatients />} />
        </Routes>
    </div>
  )
}

export default App
