import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Homes',
        path: '/Homes',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'TutorList',
                path: '/overview/TutorList',
                icon: <AiOutlineUser />
            },
            {
                title: 'CourseList',
                path: '/overview/CourseList',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'CertifiedusersList',
        path: '/overview/CertifiedusersList',
        icon: <FaOpencart />
    },
    
];
