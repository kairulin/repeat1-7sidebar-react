import { AiFillHome } from "react-icons/ai"
import {IoIosPaper} from "react-icons/io"
import {RiProductHuntFill,RiTeamFill,RiMessage2Fill,RiArrowDownSFill,RiArrowUpSFill} from "react-icons/ri"
import {MdContactSupport} from "react-icons/md"



export const SidebarData = [
    {
        title: "Overview",
        path: "/overview",
        icon: <AiFillHome/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subRoutes: [
            {
                title: "Users",
                path: "/overview/users",
                 icon: <AiFillHome/>,
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                 icon: <AiFillHome/>,
            }
        ]
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <IoIosPaper/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subRoutes: [
            {
                title: "ReportsOne",
                path: "/reports/reports1",
                 icon: <IoIosPaper/>,
            },
            {
                title: "ReportsTwo",
                path: "/reports/reports2",
                 icon: <IoIosPaper/>,
            },
            {
                title: "ReportsThree",
                path: "/reports/reports3",
                 icon: <IoIosPaper/>,
            },
        ]
    },
    {
        title: "Products",
        path: "/products",
        icon: <RiProductHuntFill/>       
    },
    {
        title: "Team",
        path: "/team",
        icon: <RiTeamFill/>       
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <RiMessage2Fill/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subRoutes: [
            {
                title: "MessagesOne",
                path: "/messages/messages1",
                 icon: <RiMessage2Fill/>,
            },
            {
                title: "MessagesTwo",
                path: "/messages/messages2",
                 icon: <RiMessage2Fill/>,
            }
        ]
    },
    {
        title: "Support",
        path: "/support",
        icon: <MdContactSupport/>
    },
    
]