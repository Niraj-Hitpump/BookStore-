import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards"; // Import the Cards component
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Course = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data)
                const data = res.data.filter((data) => data.category.toLowerCase() === "paid");
                setBook(data);
            } catch (error) {
                console.log(error)
            }
        };
        getBook();

    }, [])
    // we pass an empty array to run it only one time..

    return (
        <>
            <Navbar />
            <div className="min-h-screen dark:bg-slate-900 dark:text-white">
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    <div className="mt-28 item-center justify-center text-center">
                        <h1 className="text-2xl font-semibold md:text-4xl">
                            We are delighted to have you{" "}
                            <span className="text-pink-500">Here !! :)</span>
                        </h1>
                        <p className="mt-16">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Impedit pariatur consequatur mollitia
                            temporibus nisi atque eum commodi voluptatibus
                            eligendi officiis ducimus inventore expedita, animi
                            excepturi illum vel minima. Alias optio consequuntur
                            ex repudiandae ducimus, accusantium veniam libero
                            molestiae mollitia quae nisi praesentium vel
                            quisquam, veritatis sit dolores in laborum. Quae
                            enim voluptatibus necessitatibus eaque iste
                            asperiores corrupti voluptatem magni eius.
                        </p>

                        <Link to="/">
                            <button className="bg-pink-500 mt-4 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                                Back
                            </button>
                        </Link>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                        {book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Course;
