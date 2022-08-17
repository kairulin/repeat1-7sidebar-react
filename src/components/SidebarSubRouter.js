import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
const SidebarSubRouter = ({ item }) => {
  const [subSidebar, setSubSidebar] = useState(false)

  const subToggle = () => {
    setSubSidebar(!subSidebar);
  }
  return (
    <>
      <Link to={item.path} className="items" onClick={item.subRoutes && subToggle}>
        <div>
          {item.icon}
          <span className='items-title'> {item.title} </span>
        </div>
        <div className='sub-toggle' >{item.subRoutes && subSidebar ? item.iconOpened : item.subRoutes ? item.iconClosed : null}</div>
      </Link>


      {subSidebar && item.subRoutes.map((item, index) => {
        return (
          <Link to={item.path} className="sub" key={index}>
            {item.icon}
            <span className="sub-title">{item.title}</span>
          </Link>
        )
      })}

    </>

  )
}

export default SidebarSubRouter