import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BiDotsVerticalRounded } from "react-icons/bi"
import { PiDotsSixVerticalBold } from "react-icons/pi"
import ModuleSubList from "./ModuleSubList";
function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <ul class="list-group" key={index}>

                    <li class="list-group-item  list-group-item-secondary d-flex">
                        <div class="list-icons">
                            <span>
                                <PiDotsSixVerticalBold/>
                            </span>
                        </div>
                        <div class="list-content flex-grow-1 ms-2">
                            <p>{module.name}</p>
                            <small>{module.description}</small>
                        </div>
                        <div class="list-menu">
                            <i class="fa-solid fa-plus"></i>
                            <BiDotsVerticalRounded/>
                        </div>
                    </li>
                    <ModuleSubList/>
                </ul>
            ))
    );
}
export default ModuleList;
