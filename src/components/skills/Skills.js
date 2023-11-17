import "./Skills.css";
import React from "react";

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800  to-gray-900 py-5 px-8 pb-5">
      <div className="mb-5">
        <h1 className="text-center text-2xl uppercase">Skills</h1>
      </div>
      <div className="grid-con grid grid-cols-1 lg:grid-cols-3 gap-4  h-auto lg:h-96 bg-black p-8 lg:w-4/5 mx-auto">
        <div className="  p-5 h-70 bg-sky-300 ">
          <h1 className="text-center text-xl"> Frontend</h1>
          <ul className="ml-6 mt-2 text-lg">
            <li> Html</li>
            <li> Css</li>
            <li> Javascript</li>
            <li> BootStrap</li>
            <li> Tailwind Css *</li>
            <li> React.JS</li>
            <li> Next.JS * </li>
          </ul>
        </div>{" "}
        <div className=" p-5  h-70 bg-sky-300 ">
          <h1 className="text-center text-xl"> Backend</h1>
          <ul className="ml-6 mt-2 text-lg">
            <li> Node.js</li>
            <li> Express.Js</li>
            <li> Pyhton</li>
          </ul>
        </div>{" "}
        <div className="p-5 h-70 bg-sky-300">
          <h1 className="text-center text-xl"> DataBase</h1>
          <ul className="ml-6 mt-2 text-lg">
            <li> SQL</li>
            <li>MongoDb</li>
          </ul>
        </div>
      </div>
      <p className="text-center">* courses are yet to be completed</p>
    </div>
  );
};

export default Skills;
