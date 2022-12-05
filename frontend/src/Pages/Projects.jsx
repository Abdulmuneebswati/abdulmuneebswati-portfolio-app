/* eslint-disable no-lone-blocks */
import React, { useContext, useEffect } from 'react'
import "./projects.scss";
import DataContext from '../Context/dataContext';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { projectsData, getProjectsSectData, getSingleProject } = useContext(DataContext);
  
  useEffect(()=>{
    getProjectsSectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

const getProjectData = (id)=>{
  getSingleProject(id);
}

  return (
    <div className='projects'>
      <h1 className='h1'>Projects</h1>
      <div className="wrapper">

    

      {
        projectsData && projectsData.map((elem,i)=>{
          let projectId = `project/${elem._id}`
          return (
            <div key={i} className="flip-card">
  <div key={i} className="flip-card-inner">
    <div className="flip-card-front">
      <img src={elem.img} alt="Avatar" style={{width:"300px",height:"300px",objectFit:"fill"}} />
    </div>
    <div key={i} className="flip-card-back">
      <h1>{elem.title}</h1>
      <Link to={projectId}>  <button className='button' onClick={()=> getProjectData(elem._id)}>View details</button></Link> 
    </div>
  </div>
</div>
          )
        })
      }
      </div>
      
    </div>
  )
}

export default Projects
