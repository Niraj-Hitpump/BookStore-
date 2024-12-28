import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        console.log({ name, email, message });
        // Add alert to show the form submission
        toast.success(`Form Submitted Successfully ${name}`); 
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 mt-8">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg w-full"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                        Contact Us
                    </h2>

                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 h-32"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
