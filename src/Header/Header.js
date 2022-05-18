import React from 'react'
import "../Header/Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import tinderlogo from "../assets/img/tinderlogo.png";
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className='header'>

        <IconButton>
        <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>

        <img src={tinderlogo} alt="tinderlogo" className="header_icon"/>

        <IconButton>
        <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>

        </div>
  )
}

export default Header