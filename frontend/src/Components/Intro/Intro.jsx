import React, { useContext, useEffect} from 'react';
import "./intro.scss"
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from 'react-scroll';
import DataContext from '../../Context/dataContext';
const Intro = () => {
  const {introData,getIntroSectData} = useContext(DataContext);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
      getIntroSectData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className='intro'>
  
      <div className="i-left">
      <div className="i-name">
            <span style={{color: darkMode? "white":""}}>Hy! I Am</span>
            {
              introData.map( (elem,i) =>{
                return <span key={i}>{elem.name}</span>
              })
            }
            {introData.map( (elem,i)=>{
           return <span style={{color: darkMode? "white":""}} key={i}> {elem.desc} </span>
          })}

        </div>
        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
        <button className="button i-button">Hire me</button>
</Link>
        <div className="introIcons">
        {
          introData.map((elem,i)=>{
            return  <a href={elem.githubLink} key={i} target="_blank" rel="noreferrer"><img src={Github} alt="" /></a>
            
          })
        }
        {
          introData.map((elem,i)=>{
            return <a href={elem.linkedinLink} key={i} target="_blank" rel="noreferrer"><img src={LinkedIn} alt="" /></a>
          })
        }
        {
          introData.map((elem,i)=>{
            return <a href={elem.instaLink} key={i} target="_blank" rel="noreferrer" > <img src={Instagram} alt="" /></a>
          })
        }
        
        
        </div>
        <div className='blur1' style={{background:"var(--purple"}}></div>
      </div>

           

      <div className="i-right">

      {introData.map((singleData,i) => {
        return  <img src={singleData.img}  key={i} alt="" className='boy'/>
  
      })}




     

         
      <div className='blur2' style={{background:"skyblue"}}></div>

      </div>

    </div>
  )
}

export default Intro
