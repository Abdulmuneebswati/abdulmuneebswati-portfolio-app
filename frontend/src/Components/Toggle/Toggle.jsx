import { DarkModeOutlined,LightModeOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { themeContext } from '../../Context'
import "./toggle.scss"


const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = ()=>{
    theme.dispatch({type:"toggle"});
  }
  return (
    <div className='toggle' onClick={handleClick}>
        <DarkModeOutlined style={{fontSize:'20px'}}/>
      <LightModeOutlined style={{fontSize:'20px'}}/>
      <div className="t-btn" 
      style={darkMode? {left:'2px'}:{right:'2px'}}
      >
      </div>
    </div>
  )
}

export default Toggle
