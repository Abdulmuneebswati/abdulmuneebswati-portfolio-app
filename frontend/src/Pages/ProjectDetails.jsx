import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import DataContext from '../Context/dataContext';
import "./projectdetails.scss";
import { GitHub, TvOutlined } from '@mui/icons-material';
import { useEffect } from 'react';
const ProjectDetails = () => {
const {Project,getSingleProject} = useContext(DataContext);
const location = useLocation();
const url = location.pathname;
const lastSegment = url.split("/").pop();
useEffect(()=>{
    getSingleProject(lastSegment);
      // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
    <div className='project'>
    <div className="btn">
     <Link to="/projects"> <button className='button'>Go Back</button></Link>
    </div>
    <div className="projectData">
        <div className="left">
            <img src={Project.img} alt="" />
        </div>
        <div className="right">
            <h1>{Project.title}</h1>
            <p>{Project.desc}</p>
            <ul>
                <h1>Tools</h1>
                    { Project &&  (Project.tools).map((elem,i)=>{
                        return <li key={i}>{elem}</li>

                    })
                    }
                </ul>
            <div className="icons">
                <div className="icon"> <a href={Project.githubLink} target="_blank" rel="noreferrer"> <GitHub /> </a></div>
                <div className="icon"><a href={Project.youtubeLink} target="_blank" rel="noreferrer">  <TvOutlined/></a></div>
            </div>


            </div>

        
    </div>

    </div>
  )
}

export default ProjectDetails
