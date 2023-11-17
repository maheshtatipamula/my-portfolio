"use client";
import SingleWork from "@/components/SingleWork/SingleWork";
import Navbar from "@/components/navbar/Navbar";
import ProjectCardData from "@/components/work/workDetails";
import { useParams } from "next/navigation";
import React from "react";

const Single = () => {
  const { id } = useParams();
  const project = ProjectCardData.filter((val) => val.id.toString() === id);
  return (
    <>
      <Navbar />
      <SingleWork project={project[0]} />
    </>
  );
};

export default Single;
