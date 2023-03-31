import React, { useState, createContext, useEffect } from 'react'
import DataService from '../data-service/DataService';


export const ProjectContext = createContext();


export const ProjectProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const dataService = new DataService

    useEffect(() => {
        setLoading(true)
        dataService.getAllProjects()
            .then((projects) => {
                setData(projects)
                setLoading(false)
            })
    }, [])

    return (
        <ProjectContext.Provider value={{ data, loading }}>
            {children}
        </ProjectContext.Provider>
    )
}
