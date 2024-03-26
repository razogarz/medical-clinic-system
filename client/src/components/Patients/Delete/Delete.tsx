import { Link } from "react-router-dom";

function Delete() {
    return (
        <div className="flex flex-col items-center w-full lg:w-1/2 xl:w-1/3 space-y-6 bg-primary p-8 rounded-lg shadow-lg">
            <h1 className="text-gray-700 text-3xl font-semibold">Delete a patient</h1>
            <div className="flex flex-col space-y-4 w-1/2">
                <Link to="/delete/patient" className={"border-2 border-gray-400 rounded-lg"}>
                    <button className="w-full btn btn-outline btn-accent">
                        <p className={"text-gray-700"}>
                            Delete patient
                        </p>
                    </button>
                </Link>
                <Link to="/delete/all" className={"border-2 border-gray-400 rounded-lg"}>
                    <button className="w-full btn btn-outline btn-accent">
                        <p className={"text-gray-700"}>
                            Delete all patients
                        </p>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Delete;
