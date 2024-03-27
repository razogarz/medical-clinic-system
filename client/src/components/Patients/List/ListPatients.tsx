import usePatients from "./usePatients.ts";
import DeletePatient from "./deletePatient.ts";
import {Link} from "react-router-dom";

function ListPatients() {
    const { patientsList, RefreshPatientsList } = usePatients();

    return (
        <div>
            <h1 className={"text-7xl font-semibold mb-4 text-center text-gray-800"}>
                List Patients
            </h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"}>
                {
                    patientsList.map((patient, index) => {
                        return (
                            <div className="card w-96 bg-primary text-primary-content" key={`${patient.name}_${index}`}>
                                <div className="card-body">
                                    <h2 className="card-title">{patient.name} {patient.lastName}</h2>
                                    <p>{patient.city}, {patient.street} {patient.zipCode}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/edit/${patient._id}`}>
                                            <button className="btn">Edit
                                            </button>
                                        </Link>
                                        <button className="btn"
                                                onClick={() => {
                                                    DeletePatient(patient._id)
                                                    .then(() => {
                                                        RefreshPatientsList();
                                                    })
                                            }}
                                        >Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListPatients;