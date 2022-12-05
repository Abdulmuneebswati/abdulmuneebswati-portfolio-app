import React, { useContext, useEffect } from 'react'
import DataContext from '../../Context/dataContext'
import "./education.scss"
const Education = () => {
  const {eduData, getEduSectData} = useContext(DataContext);
  useEffect(()=>{
    getEduSectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <div className='education' id='Education'>
      <div className="title">
        Education
      </div>

      <div className="educationDetails">

      { eduData && eduData.map((elem,i)=>{
        return <div key={i} className="educationDetail">
            <div className="degree">{elem.discipline}</div>
            <div className="desc">{elem.details}</div>
            <div className="year">{elem.from}-{elem.to}</div>
        </div>
      })
        
      } 

        <div className="blur1" style={{background:"#ABF1FF94"}}></div>      

</div>

    </div>
  )
}

export default Education
