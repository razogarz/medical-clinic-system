import usePatients from "./usePatients.ts";
import DeletePatient from "./deletePatient.ts";
import {Link} from "react-router-dom";
import {Patient} from "../../../types/types.ts";
import {useEffect, useState} from "react";
import {SearchPatients, SortPatients} from "./sortingFunctions.ts";

function ListPatients() {
    const { patientsList, RefreshPatientsList } = usePatients();
    const [patients, setPatients] = useState<Patient[]>(patientsList);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setPatients(patientsList.slice((currentPage-1)*9, currentPage*9));
    }, [patientsList, currentPage]);

    return (
        <div className={"w-2/3"}>
            <h1 className={"text-7xl font-semibold mb-4 text-center text-gray-800"}>
                List Patients
            </h1>
            <nav className="w-full flex justify-between items-center p-4 bg-base-100 text-base-content shadow-lg">
                <Link to={"/"} className={"w-1/4 h-1/2"}>
                    <button className="w-full py-3 bg-background rounded">
                        <p className="text-gray-800">Homepage</p>
                    </button>
                </Link>
                <label className="w-1/4 input input-bordered flex items-center gap-2 bg-background text-gray-800">
                    <input type="text" className="grow text-gray-800 placeholder-accent" placeholder="Search"
                           onChange={(e) => {
                               SearchPatients(e.target.value, setPatients, patientsList, currentPage);
                           }}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd"
                              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                              clipRule="evenodd"/>
                    </svg>
                </label>
                <select className="select w-full max-w-xs border border-base-100 bg-background text-gray-800"
                        onChange={(e) => {
                            SortPatients(e.target.value, setPatients, patientsList, currentPage);
                        }}
                        defaultValue={"Sort by:"}
                >
                    <option disabled>Sort by:</option>
                    <option>Name</option>
                    <option>Last Name</option>
                    <option>City</option>
                    <option>Street</option>
                    <option>Zip Code</option>
                </select>
                <div>
                    <div className={"flex justify-center items-center"}>
                        <button className="join-item btn bg-background text-gray-800" onClick={() => {setCurrentPage((prev) => prev-1)}}
                                disabled={currentPage === 1}
                        >«</button>
                        <button className="join-item btn bg-background text-gray-800">{currentPage}</button>
                        <button className="join-item btn bg-background text-gray-800" onClick={() => {setCurrentPage((prev) => prev+1)}}
                                disabled={currentPage*9 > patientsList.length}
                        >»</button>
                    </div>
                </div>
            </nav>
            <div className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-4"}>
                {
                    patients.map((patient, index) => {
                        return (
                            <div className="card w-96 bg-primary text-primary-content" key={`${patient.name}_${index}`} data-testid={"patient-card"}>
                                <div className="card-body">
                                    <h2 className="card-title">{patient.name} {patient.lastName}</h2>
                                    <p>{patient.city}, {patient.street} {patient.zipCode}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/edit/${patient._id}`}>
                                            <button className="btn">
                                                Edit
                                            </button>
                                        </Link>
                                        <button className="btn"
                                                onClick={() => {
                                                    DeletePatient(patient._id)
                                                        .then(() => {
                                                            RefreshPatientsList();
                                                        })
                                                }}
                                        >Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}


export default ListPatients;