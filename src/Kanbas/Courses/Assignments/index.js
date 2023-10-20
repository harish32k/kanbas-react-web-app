import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database"
import { BiDotsVerticalRounded, BiEdit, BiPlus } from "react-icons/bi";
import { PiDotsSixVerticalBold } from "react-icons/pi"
import { FaCircleCheck } from "react-icons/fa6";
import ModuleList from "../Modules/ModuleList";
import AssignmentItems from "./AssignmentItems";
function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>

            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12 ">
                <div className="d-flex justify-content-between">
                    <div>
                        <input type="text" className="form-control w-250" placeholder="Search for Assignments" />
                    </div>
                    <div>
                        <button type="button" className="me-2 btn btn-outline-secondary">+ Group</button>
                        <button type="button" className="me-2 btn btn-danger">+ Assignment</button>
                        <button type="button" className="me-2 btn btn-outline-secondary">
                            <BiDotsVerticalRounded/></button>
                    </div>
                </div>
                <hr />

                <ul className="list-group">

                    <li className="list-group-item  list-group-item-secondary d-flex">
                        <div className="list-icons">
                            <span>
                                <PiDotsSixVerticalBold/>
                                <BiEdit className="fa-regular fa-pen-to-square"/>
                            </span>
                        </div>
                        <div className="list-content flex-grow-1 ms-2">
                            <p>ASSIGNMENTS</p>
                        </div>
                        <div className="list-menu">
                            <span>40% of total</span>
                            <BiPlus className="ms-1"/>
                            <BiDotsVerticalRounded/>
                        </div>
                    </li>

                    <AssignmentItems />
                </ul>
                <hr />



            </div>


        </>
    );
}
export default Assignments;
