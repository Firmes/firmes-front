import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Layout/index";
import DataService from "../../data-service/DataService";
import { WorkInfo, WorkPreview, NextProjectButton, WorkGallery } from "./index";

export const WorkDetailLayout = () => {

    const [imagePreviewActive, setImagePreviewActive] = useState("")
    const [project, setProject] = useState("")

    const { id } = useParams()
    const dataService = new DataService

    useEffect(() => {
        dataService.getSingleProject(id)
            .then((data) => {
                setProject(data)
            })
        window.scrollTo(0, 0)
    }, [id])


    return (
        <section className="max-w-full w-full p-2 md:top-1/4 sm:px-20 md:py-8 bg-firmes-black flex flex-col items-center">
            {project &&
                <>
                    <WorkPreview project={project} imagePreviewActive={imagePreviewActive} />
                    <WorkInfo project={project} />
                    <WorkGallery project={project} setImagePreviewActive={setImagePreviewActive} />
                    <NextProjectButton actualId={id} />
                    <Footer />
                </>
            }
        </section>
    );
};
