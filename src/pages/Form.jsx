import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/slices/formSlice";

const Form = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateForm(formData));
        setIsSubmitted(true);


        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h2 className="text-xl md:text-3xl font-bold text-green-400 mb-6">Fill the Form</h2>

            {isSubmitted && (
                <div className="bg-green-500 p-4 rounded-lg mb-6 text-white text-center w-full max-w-md">
                    <p>Form Submitted Successfully!</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-300">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Age</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
                </div>
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Form;
