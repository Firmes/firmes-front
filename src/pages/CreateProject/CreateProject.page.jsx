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

    function handleProjectDetails(e) {

        const { name, value } = e.target;

        setProjectDetails((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
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
            </form>
        </div>

    )
}

export default CreateProjectPage;