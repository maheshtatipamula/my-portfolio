import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-con  bg-gradient-to-r from-gray-800  to-gray-900">
        <div>
          <p className=" text-lg lg:text-2xl">mahesh.tatipamula43@gmail.com</p>
          <div className="flex justify-around mt-5">
            <a
              href="https://www.linkedin.com/in/mahesh-tatipamula-87900922a/"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/maheshtatipamula" target="_blank">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
