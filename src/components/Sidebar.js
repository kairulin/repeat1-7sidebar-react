import React from 'react'
import { SidebarData} from './SidebarData'
import SidebarSubRouter from './SidebarSubRouter'
import { HiOutlineMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import "./Sidebar.css"
const Sidebar = ({sidebar,toggle}) => {
   

    return (
        <>
            <div className='header'>
                <div className='icon-menu' onClick={toggle}>
                    <HiOutlineMenu />
                </div>
            </div>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <div className='icon-close' onClick={toggle}>
                    <AiOutlineClose />
                </div>
                {SidebarData.map((item, index) => {
                    return (
                        <SidebarSubRouter item={item} key={index}/>
                    )
                })}   
              
            </div>

        </>
    )
}

export default Sidebar