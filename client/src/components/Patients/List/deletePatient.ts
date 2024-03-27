import axios from "axios";

async function DeletePatient(
    pesel: string | undefined
) {
    const res = prompt("Are you sure you want to delete this patient? (yes/no)");
    if (res === "yes") {
        return axios.delete(`http://localhost:5000/patients/${pesel}`)
            .then(res => {
                alert(res.data)
                return res.status;
            })
            .catch(err => {
                alert(err)
                return err
            })
    }
}

export default DeletePatient;