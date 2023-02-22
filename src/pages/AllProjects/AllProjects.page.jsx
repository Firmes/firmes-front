import React, { useEffect, useState } from 'react';
import DataService from '../../data-service/DataService';

function AllProjectsPage() {

    const [projects, setProjects] = useState([]);
    const dataService = new DataService();

    useEffect(() => {
        dataService.getAllProjects().then((response) => setProjects(response));
    }, [])

    useEffect(() => {
        console.log(projects)
    }, [projects])

    return (
        <div>
            <h1>This is AllProjectsPage!</h1>
        </div>
    )
}

export default AllProjectsPage;