import { Link } from "react-router-dom";
import Decoration from "../Decoration";

function Homepage() {
    return (
        <>
            <h1 className="text-7xl m-12 text-center text-gray-700 font-semibold mt-8">Patient Management System</h1>
            <div
                className="flex flex-col items-center w-full lg:w-1/2 xl:w-1/3 space-y-6 bg-primary p-8 rounded-lg shadow-lg">
                <h1 className="text-gray-700 text-3xl font-semibold">Welcome, Admin!</h1>
                <div className="flex flex-col space-y-4 w-1/2">
                    <Link to="/add">
                        <button className="w-full btn btn-outline btn-accent">
                            <p className={"text-gray-700"}>
                                Add new patient
                            </p>
                        </button>
                    </Link>
                    <Link to="/list">
                        <button className="w-full btn btn-outline btn-accent">
                            <p className={"text-gray-700"}>
                                List all patients
                            </p>
                        </button>
                    </Link>
                </div>
                <Decoration/>
            </div>
        </>
    );
}

export default Homepage;

