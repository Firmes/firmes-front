import React, { useState, useEffect } from 'react';

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
        { imageURL: '', dimensions: 0 }
    ])

    function handleProjectDetails(e) {

        const { name, value } = e.target;

        setProjectDetails((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleImagesUpload(index, event) {

        const values = [...projectImages];
        const updatedValue = event.target.name;
        values[index][updatedValue] = event.target.value;
        setProjectImages(values);
    }

    function addField(e) {
        e.preventDefault();
        let newField = { imageURL: '', dimensions: 0 }
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
    //     console.log(projectDetails)
    // }, [projectDetails])

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
                            <input type="file" id="img" name="img" accept="image/*" />
                            <input name="imageURL" value={img.imageURL} placeholder='Image URL goes here' onChange={event => handleImagesUpload(index, event)} />
                            <select id='dimensions' name='dimensions' onChange={event => handleImagesUpload(index, event)}>
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