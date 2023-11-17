"use client";
import Link from "next/link";
import "./WorkCard.css";
import React from "react";

const WorkCard = (props) => {
  const { val } = props;

  return (
    <div className="project-card">
      <img src={val.imgsrc} className="img-con" alt="avatar" />
      <h2 className="project-title">{val.title}</h2>
      <div className="pro-details">
        <div className="pro-btns">
          <Link href={`/projects/${val.id}`} className="btn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
