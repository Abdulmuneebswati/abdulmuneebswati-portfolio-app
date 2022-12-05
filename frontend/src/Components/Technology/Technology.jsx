import React, { useContext, useEffect }  from 'react';
import "./technology.scss";
import Typewriter from 'typewriter-effect';

import { themeContext } from "../../Context";
import DataContext from '../../Context/dataContext';


const Technology = () => {
  const {techData , getTechSectData} = useContext(DataContext);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(()=>{
    getTechSectData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const alpha = techData.technologies;
  
  
    const typeWriter = <Typewriter
    
    
    options={{
        strings:["TECH I'M FAMILIAR WITH"],
        autoStart: true,
    loop: true,
    wrapperClassName: darkMode? "dtitle":"title",
    }}

   
  />
  return (
    <div className='technology'>
      <div className="title">{typeWriter}</div>
      <div className="skillList">
      {alpha && alpha.map((element,i)=>{
        return <div key={i} className="skill"><p> {element} </p></div>
       })
      }
      
      
      </div>
      <div className="blur2"></div>
      <div className="blur1"></div>

    </div>
  )
}

export default Technology
