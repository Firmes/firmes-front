import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataService from '../../data-service/DataService';

function AllProjectsPage() {

    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    const dataService = new DataService();

    useEffect(() => {
        dataService.getAllProjects().then((response) => setProjects(response));
    }, [setProjects])

    // useEffect(() => {
    //     console.log(projects)
    // }, [projects])

    function handleEdit(id) {
        navigate(`/edit-project/${id}`)
    }

    async function handleDelete(id) {

        if (window.confirm(`Are you sure you want to delete Project ${id}?`)) {
            await dataService.deleteProject(id);
            await dataService.getAllProjects().then((response) => setProjects(response));
        }
    }

    return (
        <div className="w-full flex justify-center flex-col items-center">
            <table className="w-9/12 table-fixed">
                <thead>
                    <tr>
                        <th>Project ID</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Client</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((p, index) => (
                            <tr key={index} className="text-center">
                                <td>{p.project_info_id}</td>
                                <td>{p.project_title}</td>
                                <td>{p.project_type}</td>
                                <td>{p.project_client}</td>
                                <td className="truncate">{p.project_description}</td>
                                <td>
                                    <div className="flex justify-evenly">
                                        <button className="hover:text-yellow-500" onClick={() => handleEdit(p.project_info_id)}>Edit</button>
                                        <button className="hover:text-red-500" onClick={() => handleDelete(p.project_info_id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="my-14">
                <button className="hover:text-green-500" onClick={() => navigate('/create-project')}>Create New Project</button>
            </div>
        </div>
    )
}

export default AllProjectsPage;