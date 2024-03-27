import {useParams} from "react-router-dom";
import EditPatientData from "./editPatientData.ts";
import useGetPatient from "./useGetPatient.ts";

function Edit() {
    const {pId} = useParams();
    const { patientToUpdate, setPatientToUpdate, initialPesel } = useGetPatient(pId);

    return (
        <>
            <h1>Edit patient information</h1>
            return (
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Edit Patient</h1>
                <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    EditPatientData(patientToUpdate, initialPesel);
                }}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1">Name:</label>
                        <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg px-3 py-2"
                               onChange={(e) => {
                                   setPatientToUpdate({...patientToUpdate, name: e.target.value})
                               }}
                               defaultValue={patientToUpdate.name}
                               required={true}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="mb-1">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" className="border border-gray-300 rounded-lg px-3 py-2"
                               onChange={(e) => {
                                   setPatientToUpdate({...patientToUpdate, lastName: e.target.value})
                               }}
                               defaultValue={patientToUpdate.lastName}
                               required={true}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pesel" className="mb-1">PESEL:</label>
                        <input type="text" id="personalId" name="personalId" className="border border-gray-300 rounded-lg px-3 py-2"
                               onChange={(e) => {
                                   setPatientToUpdate({...patientToUpdate, pesel: e.target.value})
                               }}
                                 defaultValue={patientToUpdate.pesel}
                               required={true}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="city" className="mb-1">City:</label>
                        <input type="text" id="city" name="city" className="border border-gray-300 rounded-lg px-3 py-2"
                               onChange={(e) => {
                                   setPatientToUpdate({...patientToUpdate, city: e.target.value});
                               }}
                               defaultValue={patientToUpdate.city}
                               required={true}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="street" className="mb-1">Street:</label>
                        <input type="text" id="street" name="street" className="border border-gray-300 rounded-lg px-3 py-2"
                               onChange={(e) => {
                                   setPatientToUpdate({...patientToUpdate, street: e.target.value})
                               }}
                                 defaultValue={patientToUpdate.street}
                               required={true}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="zipCode" className="mb-1">Zip Code:</label>
                        <input type="text" id="zipCode" name="zipCode" className="border border-gray-300 rounded-lg px-3 py-2"
                               onChange={(e) => {
                                   setPatientToUpdate({...patientToUpdate, zipCode: e.target.value})
                               }}
                                    defaultValue={patientToUpdate.zipCode}
                               required={true}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
                </form>
            </div>
            );
        </>
    );
}

export default Edit;