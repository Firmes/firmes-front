import React from "react";

export const WorkInfo = ({ project }) => {


  console.log(project);

  return (
    <div className="max-w-full w-full flex flex-col text-white order-3 md:order-2 my-4 md:px-8 ">

      <h3 className="text-4xl md:hidden"> {project.project_client} </h3>

      <div className="grid grid-cols-2 my-4 md:my-8 text-white text-md md:text-3xl justify-between">

        <p>CLIENT: {project.project_client} </p>
        <p>YEARS: {project.project_creation_year} </p>
        <p>TITLE: {project.project_title} </p>
        <p>TYPE: {project?.projectType?.toUpperCase()} </p>
        {/* <p>COUNTRY: COLOMBIA</p>
        <p>FORMAT: 16:9</p> */}

      </div>

    </div>
  );
};
