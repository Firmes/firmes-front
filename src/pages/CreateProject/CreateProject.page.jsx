import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataService from '../../data-service/DataService';

function CreateProjectPage() {

    const [projectDetails, setProjectDetails] = useState({
        project_title: '',
        project_client: '',
        project_description: '',
        project_year: 0,
        project_videoURL: '',
        project_type: ''
    })

    const textAreaRef = useRef(null);

    const [projectImages, setProjectImages] = useState([
        { project_image_url: '', image_is_portrait: false }
    ])

    const navigate = useNavigate();
    const { id } = useParams();
    const dataService = new DataService();

    useEffect(() => {
        if (id) {
            dataService.getSingleProject(id).then((response) => (setProjectDetails({
                project_title: response.project_title,
                project_client: response.project_client,
                project_description: response.project_description,
                project_year: response.project_creation_year,
                project_videoURL: response.project_video_url,
                project_type: response.project_type
            }), setProjectImages(response.project_images)))
        }
    }, [])

    useEffect(() => {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
    }, [projectDetails.project_description]);

    function handleProjectDetails(e) {

        const { name, value } = e.target;

        setProjectDetails((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleImageDetails(index, event) {

        const values = [...projectImages];
        const updatedValue = event.target.name;

        if (event.target.type == 'checkbox') {
            // values.forEach((item) => item.image_is_portrait = false);
            values.forEach((item, i) => {
                if (i !== index) {
                    item.image_is_portrait = false
                }
            })

            values[index][updatedValue] = event.target.checked;

        } else {
            values[index][updatedValue] = event.target.value;
        }

        setProjectImages(values);
    }

    async function handleImageUpload(index, event) {
        event.preventDefault();
        const uploadData = new FormData();
        uploadData.append('project_image_url', event.target.files[0])
        const values = [...projectImages];

        if (event.target.files[0]) {
            let updatedValue;
            await dataService.uploadImage(uploadData).then((response) => updatedValue = response.project_image_url)
            values[index]['project_image_url'] = updatedValue;
            setProjectImages(values);
        }

    }

    function addField(e) {
        e.preventDefault();
        let newField = { project_image_url: '', image_is_portrait: false }
        setProjectImages([...projectImages, newField])
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (id) {
            await dataService.updateProject(id, projectDetails, projectImages);
        } else {
            await dataService.createProject(projectDetails, projectImages);
        }

        navigate('/all-projects')
    }

    async function removeField(index, event, imageId) {
        event.preventDefault();
        let data = [...projectImages];
        await dataService.deleteImage(imageId);
        data.splice(index, 1);
        setProjectImages(data);
    }

    // useEffect(() => {
    //     console.log(projectDetails)
    // }, [projectDetails])

    // useEffect(() => {
    //     console.log(projectImages)
    // }, [projectImages])

    return (
        <div className="flex mt-5 w-3/5">
            <form className="w-full">
                <div className="flex">
                    <input className="py-3 my-3 mr-2 w-1/2" name="project_title" value={projectDetails.project_title} placeholder='Enter title name' onChange={handleProjectDetails} type="text" />
                    <input className="py-3 my-3 ml-2 w-1/2" name="project_client" value={projectDetails.project_client} placeholder='Enter client name' onChange={handleProjectDetails} type="text" />
                </div>
                <div className="flex">
                    <textarea className="py-3 my-3 mr-2 w-1/2" name="project_description" value={projectDetails.project_description} ref={textAreaRef} placeholder='Enter description' onChange={handleProjectDetails} type="text" rows={5}/>
                    <div className="ml-2 w-1/2">
                        <input className="py-3 my-3 w-full" name="project_year" value={projectDetails.project_year} placeholder='Enter Year of creation' onChange={handleProjectDetails} type="number" min={0} />
                    </div>
                </div>
                <div className="flex">
                    <input className="py-3 my-3 mr-2 w-1/2" name="project_videoURL" value={projectDetails.project_videoURL} placeholder='Enter video URL' onChange={handleProjectDetails} type="text" />
                    <input className="py-3 my-3 ml-2 w-1/2" name="project_type" value={projectDetails.project_type} placeholder='Enter type of project' onChange={handleProjectDetails} type="text" />
                </div>

                <hr />

                {
                    projectImages.map((img, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center">
                                <input className="py-3 my-3 mr-2" type="file" id="img" name="project_image_url" accept="image/*" onChange={(event) => handleImageUpload(index, event)} />
                                <label><input type="checkbox" id="image_is_portrait" value={img.image_is_portrait} checked={img.image_is_portrait} name="image_is_portrait" onChange={event => handleImageDetails(index, event)} /> Is portrait?</label>
                                <button className="hover:text-red-600" onClick={event => removeField(index, event, img.image_id)}>Remove</button>
                            </div>

                            {
                                img.project_image_url ?
                                    <a href={img.project_image_url} target="_blank" className="cursor-pointer">
                                        <div>
                                            <input className="py-3 my-3 mr-2 w-full pointer-events-none" name="project_image_url" value={img.project_image_url} placeholder='Image URL goes here' readOnly type="text" />
                                        </div>
                                    </a>

                                    :

                                    <a href={''} target="_self" className="pointer-events-none">
                                        <div>
                                            <input className="py-3 my-3 mr-2 w-full pointer-events-none" name="project_image_url" value={img.project_image_url} placeholder='Image URL goes here' readOnly type="text" />
                                        </div>
                                    </a>
                            }
                            <hr />
                        </div>
                    ))
                }

                <div className="flex flex-col items-center">
                    <div>
                        <button className="py-3 my-3 mr-2 hover:text-green-500" onClick={addField}>Add Field</button>
                    </div>
                    <div>

                        {
                            projectDetails.project_year < 0 ?
                                <div className="flex flex-col">
                                    <span>Negative numbers not allowed.</span>
                                    <button className="py-3 my-3 mr-2" onClick={handleSubmit} disabled>Submit</button>
                                </div>

                                :

                                <button className="py-3 my-3 mr-2 hover:text-sky-500" onClick={handleSubmit}>Submit</button>
                        }
                    </div>
                </div>
            </form>
        </div>

    )
}

export default CreateProjectPage;