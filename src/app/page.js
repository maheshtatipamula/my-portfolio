import WorkCard from "@/components/WorkCard/WorkCard";
import TimeLine from "@/components/chrono/Timeline";

import Navbar from "@/components/navbar/Navbar";
import Skills from "@/components/skills/Skills";

import ProjectCardData from "@/components/work/workDetails";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="flex   flex-col md:flex-row  items-center justify-center md:justify-around w-screen   mx-auto bg-gradient-to-r from-gray-800  to-gray-900"
        style={{ height: "80vh" }}
      >
        <div className="flex  flex-col items-center justify-center gap-0 order-2 md:order-1">
          <h1 className="text-md  lg:text-5xl mb-1 md:mb-2">hey I'M MAHESH</h1>
          <h3 className="text-md  lg:text-4xl mb-1 md:mb-2">
            I'M MERN STACK DEVELOPER
          </h3>

          <div className="m-5">
            <Link
              href="/projects"
              className="py-3 px-8 text-sm bg-gray-900 text-white uppercase cursor-pointer font-medium border border-solid border-white hover:bg-opacity-20 hover:bg-white hover:text-white transition duration-300 mx-2"
            >
              project
            </Link>
            <Link
              href="/contact"
              className="py-3 px-8 text-sm bg-transparent text-white uppercase cursor-pointer font-medium border border-solid border-white hover:bg-opacity-20 hover:bg-white hover:text-white transition duration-300 mx-2"
            >
              contact
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 mb-2">
          <Image
            alt="mahesh"
            className="rounded-full md:h-4/5 md:w-80"
            width={200}
            height={200}
            src="/mahesh.jpeg"
          />
        </div>
      </div>
      <TimeLine />
      <Skills />
      <div className="bg-gradient-to-r from-gray-800  to-gray-900 py-5">
        <h1 className="text-center text-2xl uppercase mb-8">projects </h1>
        <div className="project-con">
          {ProjectCardData.map((val, ind) => {
            return <WorkCard key={ind} val={val} />;
          })}
        </div>
      </div>
    </>
  );
}
