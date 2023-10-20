import { Link, useLocation } from "react-router-dom";
import "./home.css"
import { BsPersonCircle } from "react-icons/bs"
import { AiOutlineDashboard } from "react-icons/ai"
import { BiSolidBook } from "react-icons/bi"
import { BsCalendarWeek } from "react-icons/bs"
import { HiInbox } from "react-icons/hi"
import { BsClockHistory } from "react-icons/bs"
import { PiProjectorScreenBold } from "react-icons/pi"
import { MdOutlineExitToApp } from "react-icons/md"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import React from "react";

function KanbasNavigation() {
    const { pathname } = useLocation();

    const sidebarItems = [
        {
            title: "Account",
            iconClass: "BsPersonCircle account-icon",
            icon: <BsPersonCircle />,
            link: "Account",
        },
        {
            title: "Dashboard",
            iconClass: "fa-gauge",
            icon: <AiOutlineDashboard />,
            link: "Dashboard",
            selected: true,
        },
        {
            title: "Courses",
            iconClass: "fa-book",
            icon: <BiSolidBook />,
            link: "Courses",
        },
        {
            title: "Calendar",
            iconClass: "fa-calendar-days",
            icon: <BsCalendarWeek />,
            link: "#",
        },
        {
            title: "Inbox",
            iconClass: "fa-inbox",
            icon: <HiInbox />,
            link: "#",
        },
        {
            title: "History",
            iconClass: "fa-clock",
            icon: <BsClockHistory />,
            link: "#",
        },
        {
            title: "Studio",
            iconClass: "fa-tv",
            icon: <PiProjectorScreenBold />,
            link: "#",
        },
        {
            title: "Commons",
            iconClass: "fa-right-from-bracket",
            icon: <MdOutlineExitToApp />,
            link: "#",
        },
        {
            title: "Help",
            iconClass: "fa-circle-question",
            icon: <AiOutlineQuestionCircle />,
            link: "#",
        },
    ];


    return (
        // <div className="list-group" style={{ width: 150 }}>
        //     {links.map((link, index) => (
        //         <Link
        //             key={index}
        //             to={`/Kanbas/${link}`}
        //             className={`list-group-item ${pathname.includes(link) && "active"}`}>
        //             {link}
        //         </Link>
        //     ))}
        // </div>

        <div class="kanbas-sidebar flex-box">


            <div class="sidebar-item">
                <div class="sidebar-flex-item">
                    <img class="logo-img" src="../../images/MONOGRAM-red-2-1.svg" alt="Northeastern logo" />
                </div>
            </div>


            {sidebarItems.map((item, index) => (
                <div key={index} className={`sidebar-item ${pathname.includes(item.link) ? "selected-item" : ""}`}>
                    <Link className="sidebar-link" to={item.link}>
                        <div className="sidebar-flex-item">
                            {item.icon && React.cloneElement(item.icon, { className: `sidebar-icon ${item.iconClass}` })}
                            {/* <i className={`fa-solid fa-${item.iconClass} sidebar-icon`}></i> */}
                            <span className={`sidebar-text ${pathname.includes(item.link) ? "selected-text" : ""}`}>{item.title}</span>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    );
}
export default KanbasNavigation;