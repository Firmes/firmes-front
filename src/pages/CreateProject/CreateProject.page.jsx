import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

    const [projectImages, setProjectImages] = useState([
        { imageUrl: '', dimensions: 0, image_is_portrait: false }
    ])

    const navigate = useNavigate();
    const dataService = new DataService();

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
            values[index][updatedValue] = event.target.checked;
        } else {
            values[index][updatedValue] = event.target.value;
        }

        setProjectImages(values);
    }

    async function handleImageUpload(index, event) {
        event.preventDefault();
        const uploadData = new FormData();
        uploadData.append('imageUrl', event.target.files[0])
        const values = [...projectImages];

        if (event.target.files[0]) {
            let updatedValue;
            await dataService.uploadImage(uploadData).then((response) => updatedValue = response.imageUrl)
            values[index]['imageUrl'] = updatedValue;
            setProjectImages(values);
        }

    }

    function addField(e) {
        e.preventDefault();
        let newField = { imageUrl: '', dimensions: 0, image_is_portrait: false }
        setProjectImages([...projectImages, newField])
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await dataService.createProject(projectDetails, projectImages);
        navigate('/')
    }

    function removeField(index, event) {
        event.preventDefault();
        let data = [...projectImages];
        data.splice(index, 1);
        setProjectImages(data);
    }

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
                    <input className="py-3 my-3 mr-2 w-1/2" name="project_description" value={projectDetails.project_description} placeholder='Enter description' onChange={handleProjectDetails} type="text" />
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
                                <input className="py-3 my-3 mr-2" type="file" id="img" name="imageUrl" accept="image/*" onChange={(event) => handleImageUpload(index, event)} />
                                <select className="py-3 pr-10 my-3 mr-2" id='dimensions' name='dimensions' onChange={event => handleImageDetails(index, event)}>
                                    <option value={0}>2x2</option>
                                    <option value={1}>4x4</option>
                                    <option value={2}>8x8</option>
                                </select>
                                <label><input type="checkbox" id="image_is_portrait" value={img.image_is_portrait} name="image_is_portrait" onChange={event => handleImageDetails(index, event)} /> Is portrait?</label>
                                <button className="hover:text-red-600" onClick={event => removeField(index, event)}>Remove</button>
                            </div>
                            <div>
                                <input className="py-3 pr-52 my-3 mr-2 w-full" name="imageUrl" value={img.imageUrl} placeholder='Image URL goes here' readOnly type="text" />
                            </div>
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