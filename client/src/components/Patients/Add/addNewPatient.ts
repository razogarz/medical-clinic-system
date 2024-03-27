import {Patient} from "../../../types/types.ts";
import axios from "axios";

export function AddNewPatient(
    patient: Patient
) {
  axios.post('http://localhost:5000/patients/', patient, {
         headers: {
              'Content-Type': 'application/json'
         }
   })
         .then(res => {
             alert(res.data)
             if(res.status === 200) {
                    window.location.href = "/list";
             }
         })
         .catch(err => {
             alert(err)
             return err
         })
}