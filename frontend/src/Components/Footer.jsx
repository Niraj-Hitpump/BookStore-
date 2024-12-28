import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
    return (
        <div>
            <hr />
            <footer className="footer footer-center text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="flex space-x-6 justify-center items-center">
                        <a
                            href="https://www.linkedin.com/in/niraj-kumar-prajapati-78474a264"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-500 transition-colors"
                        >
                            <TiSocialLinkedin 
                            size={40}
                            />

                        </a>

                        <a
                            href="https://www.instagram.com/hitpump_world/?utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-300 transition-colors"
                        >
                            <SlSocialInstagram 
                            size={30}/>
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=100024146465201"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400 transition-colors"
                        >
                            <TiSocialFacebook 
                            size={40}/>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved by ACME Industries Ltd
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
