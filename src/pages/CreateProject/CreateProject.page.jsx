import React, { useState, useEffect } from 'react';
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
        { imageUrl: '', dimensions: 0 }
    ])

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
        values[index][updatedValue] = event.target.value;
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
        let newField = { imageUrl: '', dimensions: 0 }
        setProjectImages([...projectImages, newField])
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(projectDetails)
        console.log(projectImages)
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
        <div className='container mx-auto'>
            <form>
                <div>
                    <input name="project_title" value={projectDetails.project_title} placeholder='Enter title name' onChange={handleProjectDetails} />
                    <input name="project_client" value={projectDetails.project_client} placeholder='Enter client name' onChange={handleProjectDetails} />
                </div>
                <div>
                    <input name="project_description" value={projectDetails.project_description} placeholder='Enter description' onChange={handleProjectDetails} />
                    <input name="project_year" value={projectDetails.project_year} placeholder='Enter Year of creation' onChange={handleProjectDetails} />
                </div>
                <div>
                    <input name="project_videoURL" value={projectDetails.project_videoURL} placeholder='Enter video URL' onChange={handleProjectDetails} />
                    <input name="project_type" value={projectDetails.project_type} placeholder='Enter type of project' onChange={handleProjectDetails} />
                </div>

                {
                    projectImages.map((img, index) => (
                        <div key={index}>
                            <input type="file" id="img" name="imageUrl" accept="image/*" onChange={(event) => handleImageUpload(index, event)} />
                            <input name="imageUrl" value={img.imageUrl} placeholder='Image URL goes here' readOnly />
                            <select id='dimensions' name='dimensions' onChange={event => handleImageDetails(index, event)}>
                                <option value={0}>2x2</option>
                                <option value={1}>4x4</option>
                                <option value={2}>8x8</option>
                            </select>
                            <button onClick={event => removeField(index, event)}>Remove</button>
                        </div>
                    ))
                }

                <button onClick={addField}>Add Field</button>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>

    )
}

export default CreateProjectPage;