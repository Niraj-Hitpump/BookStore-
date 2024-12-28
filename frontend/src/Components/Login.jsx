import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();

    // For form validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit =async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios
            .post("https://bookstore-bk.onrender.com/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Login successfully");
                    handleClose()
                    setTimeout(() => {
                        window.location.reload();
                        // gives exact response in the local storage
                        localStorage.setItem("Users", JSON.stringify(userInfo));
                    }, 1000)
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error", +err.response.data.message)
                    setTimeout(() => {},2000);
                }
            });
    }

    // Function to handle close and redirect
    const handleClose = () => {
        const dialog = document.getElementById("my_modal_3");
        dialog.close(); // Close the modal
        navigate("/"); // Redirects to the home page
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>

                        {/* Email Field */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter Your email"
                                className="w-80 px-3 py-1 border-md outline-none"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter Your password"
                                className="w-80 px-3 py-1 border-md outline-none"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-around mt-4">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                            >
                                Login
                            </button>
                            <p>
                                Not Registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-600 cursor-pointer"
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;
