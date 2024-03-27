import {useEffect, useState} from "react";
import axios from "axios";

function UseGetPatient(
    pId: string | undefined
) {
    const emptyPatient = {
        name: "",
        lastName: "",
        pesel: "",
        city: "",
        street: "",
        zipCode: ""
    }
    const [patientToUpdate, setPatientToUpdate] = useState(emptyPatient);
    useEffect(() => {
        axios.get(`http://localhost:5000/patients/${pId}`)
            .then(res => {
                setPatientToUpdate(res.data);
            })
            .catch(err => {
                alert(err);
            })
    }, []);

    return {
        patientToUpdate,
        setPatientToUpdate,
        initialPesel: pId
    }
}

export default UseGetPatient;