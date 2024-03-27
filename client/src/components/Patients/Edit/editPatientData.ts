import {Patient} from "../../../types/types.ts";
import axios from "axios";

function EditPatientData(
    patient: Patient,
    initialPesel: string | undefined
) {
    const patientExcludeId = {
        name: patient.name,
        lastName: patient.lastName,
        pesel: patient.pesel,
        city: patient.city,
        street: patient.street,
        zipCode: patient.zipCode
    }
    axios.patch(`http://localhost:5000/patients/${initialPesel}`, patientExcludeId, {
             headers: {
                'Content-Type': 'application/json'
             }
     })
             .then(res => {
                 alert(res.data);
             })
             .catch(err => {
                 alert(err);
                 return err;
             })
}

export default EditPatientData;