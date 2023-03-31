import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectContext } from '../../context/ProjectsContext'
import arrow from "../../assets/arrow.svg"

export const NextProjectButton = ({ actualId }) => {

    const {data} = useContext(ProjectContext)

    const navigate = useNavigate()

    const handlePick = () =>{
        const actualIndex = data.findIndex((project) => project.project_info_id == actualId)
        const newIndex = data.length - 1 === actualIndex ? 0 : actualIndex + 1

        navigate(`/work/${data[newIndex].project_info_id}`)
    }


    return (
        <button className='text-white text-xl flex items-center gap-4 m-4 self-end hover:text-firmes-violet order-5 md:order-4' onClick={handlePick}  >
            NEXT PROJECT
            <img src={arrow} alt={"Arrow"} />
        </button>
    )
}
