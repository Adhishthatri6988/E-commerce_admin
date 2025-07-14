import React from 'react'
import {NavLink} from 'react-router-dom'
import assets  from '../assets/admin_assets/assets';

const Sidebar = () => {
  return (
    <div className=' '>

      <div>
        <NavLink to={'/add'} >
        <img src={assets.add_icon} alt='' />
        <p>Add items</p>
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar