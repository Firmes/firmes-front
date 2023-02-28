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
        <div className="w-full flex justify-center">
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
                                <td>{p.project_description}</td>
                                <td className="flex justify-around">
                                    <button onClick={() => handleEdit(p.project_info_id)}>Edit</button>
                                    <button onClick={() => handleDelete(p.project_info_id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllProjectsPage;