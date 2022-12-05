import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { themeContext } from "../../Context";
import DataContext from '../../Context/dataContext';
import "./portfolio.scss";
const Portfolio = () => {
  const {randomProject,getPorfolioSectData} = useContext(DataContext);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(()=>{
    getPorfolioSectData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const typeWriter = <Typewriter
  options={{
      strings:["My Projects"],
      autoStart: true,
  loop: true,
  wrapperClassName: darkMode? "dtitle":"title",
  }} />
  
  return (
    <div className='portfolio'>
      <div className="mainHeading">
        {typeWriter}
      </div>
      <div className="Pprojects">
      { randomProject && randomProject.map((elem,i)=>{
        return <div key={i} className="Pproject">
              <div className="img">
                <img src={elem.img} alt="" />
              </div>
              <Link  to={`projects/project/${elem._id}`}><div className="Ptitle">{elem.title}</div></Link>

              </div>
      })

      }
      </div>
      <div className="btns"><Link to="/projects" style={{textDecoration:"none"}}><div className="button m-btn" >View more projects</div></Link></div>
    </div>
  )
}

export default Portfolio
