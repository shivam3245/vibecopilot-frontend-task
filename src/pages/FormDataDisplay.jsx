// FormDataDisplay.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetForm } from "../redux/slices/formSlice";

const FormDataDisplay = () => {
    const submissions = useSelector((state) => state.form.submissions);
    const dispatch = useDispatch();

    const handleClearAll = () => {
        dispatch(resetForm());
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center mt-15 pb-10 pt-5 md:p-6">
            <div className="w-[100%] max-w-4xl md:max-w-3xl text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-lg md:text-2xl font-extrabold text-green-400 mb-6">
                    Submitted Data
                </h1>

                <button
                    onClick={handleClearAll}
                    className="mb-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                    Clear All
                </button>

                {submissions.length === 0 ? (
                    <p className="text-gray-400">No submissions yet.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                        {submissions.map((data, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 p-6 rounded-lg shadow-lg relative"
                            >
                                <p>
                                    <strong className="text-green-400">Name:</strong> {data.name || "N/A"}
                                </p>
                                <p>
                                    <strong className="text-green-400">Email:</strong> {data.email || "N/A"}
                                </p>
                                <p>
                                    <strong className="text-green-400">Age:</strong> {data.age || "N/A"}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormDataDisplay;
