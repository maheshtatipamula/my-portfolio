"use client";
import "./SingleWork.css";
import React from "react";

import Image from "next/image";

import Link from "next/link";

const SingleWork = (props) => {
  const { project } = props;

  return (
    <div className="bg-gradient-to-r from-gray-800  to-gray-900">
      <div className="single-project-card ">
        <Image
          src={`/${project?.imgsrc}`}
          width={450}
          height={450}
          className="single-img-con"
          alt="avatar"
        />
        <h2 className="single-project-title">{project?.title}</h2>
        <p className="single-p">
          <strong>TECHNOLOGIES USED : </strong>
          {project?.technologies}
        </p>
        <p className="single-p">
          <strong>DESCRIPTION : </strong>
          {project?.desc}
        </p>
        <ul className="single-ul">
          {project?.lis &&
            project?.lis.map((value, ind) => (
              <li className="single-li" key={ind}>
                {value.p1}
              </li>
            ))}
        </ul>
        {project?.github && (
          <p className="single-p">
            <strong>Github Link :</strong>
            <a href={project?.github} target="_blank">
              click here to view the Github repo
            </a>
          </p>
        )}
        <p className="single-p">
          <strong>LINK : </strong>
          <a href={project?.view} target="_blank">
            Click here to View the Website
          </a>
        </p>
        {project?.backend && (
          <p className="single-p">
            <strong>BACKEND LINK : </strong>
            <a href={project?.backend} target="_blank">
              click here to view backend Github repo
            </a>
          </p>
        )}
        {project?.postman && (
          <p className="single-p">
            <strong> DOCUMENT : </strong>
            <a href={project?.postman} target="_blank">
              click here to view postman documentation
            </a>
          </p>
        )}
        <div className="single-pro-details">
          <div className="single-pro-btns">
            <Link href="/projects" className="btn">
              go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWork;
