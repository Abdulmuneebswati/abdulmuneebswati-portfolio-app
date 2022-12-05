import { Facebook, GitHub, Instagram } from '@mui/icons-material'
import React, { useContext, useEffect } from 'react'
import "./footer.scss"
import Wave from "../../img/wave.png"
import DataContext from '../../Context/dataContext'
const Footer = () => {
  const {introData,getIntroSectData} = useContext(DataContext);
  useEffect(()=>{
    getIntroSectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // console.log(introData);
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width:'100%'}}/>
      <div className="f-content">
        {introData && introData.map((elem,i)=>{
          return  <span key={i}>{elem.email}</span>
        })}
        <div className="f-icons">

            {
              introData && introData.map((elem,i)=>{
                return  <a href={elem.instaLink} key={i} target="_blank" rel="noreferrer"><Instagram style={{color:"white",fontSize:"3rem"}} /></a>
            
              })}
              
              {
              introData && introData.map((elem,i)=>{
                return <a href={elem.fbLink} key={i} target="_blank" rel="noreferrer"><Facebook style={{color:"white",fontSize:"3rem"}} /></a> 
              })}
            
              {
              introData && introData.map((elem,i)=>{
                return <a href={elem.githubLink} key={i} target="_blank" rel="noreferrer"><GitHub style={{color:"white",fontSize:"3rem"}} /></a>
              })}
       
        </div>
      </div>
    </div>
  )
}

export default Footer
