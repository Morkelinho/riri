import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [

    {

        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Activities',
        path: '/activities',
        icon: <AiIcons.AiFillTablet />,
        cName: 'nav-text'
    },
    {
        title: 'Budgets',
        path: '/budgets',
        icon: <AiIcons.AiFillBank />,
        cName: 'nav-text'
    },
    {
        title: 'Expenses',
        path: '/expenses',
        icon: <AiIcons.AiFillMoneyCollect />,
        cName: 'nav-text'
    },
    {
        title: 'Notifications',
        path: '/notify',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Exit App',
        path: '/exitapp',
        icon: <IoIcons.IoIosLogOut />,
        cName: 'nav-text'
    },

]
