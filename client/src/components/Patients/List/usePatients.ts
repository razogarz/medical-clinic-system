import {useEffect, useState} from "react";
import {Patient} from "../../../types/types.ts";
import axios from "axios";

function UsePatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
    function RefreshPatientsList() {
        axios.get('http://localhost:5000/patients/')
            .then(res => {
                setPatients(res.data)
            })
    }


    useEffect(() => {
        RefreshPatientsList();
    }, [])

  return {
        patientsList: patients,
        RefreshPatientsList
  }
}

export default UsePatients;
