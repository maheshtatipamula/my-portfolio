"use client";
import React from "react";
import { Chrono } from "react-chrono";

const TimeLine = () => {
  const items = [
    {
      title: "2017",
      cardTitle: "Sri Vijaya Sai High School",

      cardSubtitle: "from 5TH to 10Th",
      cardDetailedText: "GPA : 8.5",
    },
    {
      title: "2019",
      cardTitle: "Narayana Junior College",

      cardSubtitle: "Intermediate (MPC)",
      cardDetailedText: "Marks secured : 911/1000",
    },
    {
      title: "2023",
      cardTitle: "Methodist College Of Engineering And Technology",

      cardSubtitle: "Electronics and Communication(ECE)",
      cardDetailedText: "CPGA : 6.4",
    },
    {
      title: "2023",
      cardTitle: "NXT WAVE",

      cardSubtitle: "Full Stack Developer (Completed course)",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-800  to-gray-900 pt-12">
      <div className=" pt-12">
        <h1 className="text-center text-2xl mb-10 uppercase ">
          Education Details
        </h1>
      </div>

      <Chrono
        items={items}
        hideControls={{ hideControls: false }}
        cardHeight={{ cardHeight: 100 }}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "grey",
          secondary: "grey",
          cardBgColor: "grey",
          titleColor: "white",
          titleColorActive: "white",
          cardSubtitleColor: "white", // Set color for cardSubtitle
          cardText: "white", // Set color for cardDetailedText
          cardTitleColor: "white",
          cardDetailedTextColor: "white",
        }}
      />
    </div>
  );
};

export default TimeLine;
