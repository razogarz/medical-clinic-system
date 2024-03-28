import {Patient} from "../../../types/types.ts";

export function SearchPatients(
    searchQuery: string,
    setPatients: (patients: Patient[]) => void,
    patientsList: Patient[],
    currentPage: number
) {
    const filteredPatients = patientsList.filter((patient) => {
        return patient.name.toLowerCase().includes(searchQuery.toLowerCase())
            || patient.lastName.toLowerCase().includes(searchQuery.toLowerCase())
            || patient.city.toLowerCase().includes(searchQuery.toLowerCase())
            || patient.street.toLowerCase().includes(searchQuery.toLowerCase())
            || patient.zipCode.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setPatients(filteredPatients.slice((currentPage - 1) * 9, currentPage * 9));
}

export function SortPatients(
    sortBy: string,
    setPatients: (patients: Patient[]) => void,
    patientsList: Patient[],
    currentPage: number
) {
    let sortedPatients: Patient[] = [];
    switch (sortBy) {
        case "Name":
            sortedPatients = patientsList.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Last Name":
            sortedPatients = patientsList.sort((a, b) => a.lastName.localeCompare(b.lastName));
            break;
        case "City":
            sortedPatients = patientsList.sort((a, b) => a.city.localeCompare(b.city));
            break;
        case "Street":
            sortedPatients = patientsList.sort((a, b) => a.street.localeCompare(b.street));
            break;
        case "Zip Code":
            sortedPatients = patientsList.sort((a, b) => a.zipCode.localeCompare(b.zipCode));
            break;
        default:
            sortedPatients = patientsList;
    }

    setPatients(sortedPatients.slice((currentPage - 1) * 9, currentPage * 9));
}