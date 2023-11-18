"use client";
import "./Footer.css";
import React from "react";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-black p-5 h-80  flex flex-col md:flex-row gap-2 justify-around items-center">
      <div className="flex flex-col">
        <h1 className="text-center uppercase text-lg"> address</h1>
        <div className="flex gap-2">
          <FaHome size={20} style={{ color: "#fff" }} />
          <p>Hyderabad</p>
        </div>{" "}
        <div className="flex gap-2">
          <FaPhone size={20} style={{ color: "#fff" }} />
          <p> 7013848531</p>
        </div>{" "}
        <div className="flex gap-2">
          <FaMailBulk size={20} style={{ color: "#fff" }} />
          <p className="text-sm"> mahesh.tatipamula43@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-center uppercase text-lg">
          Social Media Accounts{" "}
        </h4>

        <div className="flex mt-5">
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
  );
};

export default Footer;
