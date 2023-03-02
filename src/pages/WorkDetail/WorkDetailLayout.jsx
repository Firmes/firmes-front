import React, {  useState } from "react";
import { Footer } from "../../components/Layout/index";
import { data } from "../../helpers/data";
import { WorkInfo, WorkPreview, NextProjectButton, WorkGallery } from "./index";

export const WorkDetailLayout = () => {

    const [imagePreviewActive, setImagePreviewActive] = useState(0)

    
    

    return (
        <section className="max-w-full p-2 md:top-1/4 md:py-8 md:px-4 bg-firmes-black flex flex-col items-center">
            <WorkPreview image={data[0]?.images[imagePreviewActive]} video={data[0]?.video} />
            <WorkInfo title={data[0]?.title} description={data[0]?.description} year={data[0]?.year} client={data[0]?.client} type={data[0]?.type} setImagePreviewActive={setImagePreviewActive} />
            <WorkGallery images={data[0]?.images} setImagePreviewActive={setImagePreviewActive} description={data[0]?.description} />
            <NextProjectButton imagePreviewActive={imagePreviewActive} setImagePreviewActive={setImagePreviewActive} data={data} />
            <Footer />
        </section>
    );
};
