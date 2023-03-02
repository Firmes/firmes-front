import React, { useState, createContext, useEffect } from 'react'
import DataService from '../data-service/DataService';


export const ProjectContext = createContext();


export const ProjectProvider = ({ children }) => {

    const [data, setData] = useState([])

    const dataService = new DataService

    useEffect(() => {

        dataService.getAllProjects()
            .then((projects) => {

                setData(projects)
            })
    }, [])

    return (
        <ProjectContext.Provider value={{ data }}>
            {children}
        </ProjectContext.Provider>
    )
}
