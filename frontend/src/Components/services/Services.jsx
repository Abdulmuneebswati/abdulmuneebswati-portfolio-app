import React, { useContext, useEffect } from 'react';
import "./services.scss";
import Card from '../Card/Card';
// import Resume from "./cv1.pdf";
import { themeContext } from "../../Context";
import DataContext from '../../Context/dataContext';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const {servicesData,getServicesSectData} = useContext(DataContext);
  useEffect(()=>{
    getServicesSectData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    
    <div className='services' id='Services'>
      <div className="left">
        <span style={{color: darkMode? "white":""}}>My Awesome</span>
        <span>Skills</span>
        {
          servicesData.map((elem,i)=>{
            return <span key={i} style={{color: darkMode? "white":""}}>
              {elem.skillsdesc} </span>
            })
        }
        
        {servicesData.map((singleData,i) => {
       return <a key={i} href={singleData.resume} download className='Link'>
  <button  key={i} className='button s-button' >
        View resume
        </button>
</a>
  })}
        <div className="blur1" style={{background:"#ABF1FF94"}}></div>      
      </div>

      <div className="right">
      <div className="top">
      {/* 1stCard */}
         <div className='topCard'>
         
         {servicesData.map((singleData,i) => {
        const base64String = window.btoa(
          String.fromCharCode(...new Uint8Array(singleData.emojione.data.data))
        );
        return <Card  emoji={`data:image/png;base64,${base64String}`} key={i} heading={singleData.t_title} detail={singleData.t_desc}/>   
  
      })}
        </div> 
        </div>
        <div className="bottom">
        {/* 2ndCard */}
        <div className='rightCard'>
        {servicesData.map((singleData,i) => {
        const base64String = window.btoa(
          String.fromCharCode(...new Uint8Array(singleData.emojitwo.data.data))
        );
        return <Card  emoji={`data:image/png;base64,${base64String}`} key={i} heading={singleData.l_title} detail={singleData.l_desc}/>   
  
      })}
        </div> 
        
        {/* 3rdCard */}
        <div className='leftCard'>
        {servicesData.map((singleData,i) => {
        const base64String = window.btoa(
          String.fromCharCode(...new Uint8Array(singleData.emojithree.data.data))
        );
        
        return <Card  emoji={`data:image/png;base64,${base64String}`} key={i} heading={singleData.r_title} detail={singleData.r_desc}/>   
      })}
        
        
        </div> </div>
        <div className="blur2" style={{background:"var(--purple)"}}></div>
      </div>

    </div>
  )
}

export default Services
