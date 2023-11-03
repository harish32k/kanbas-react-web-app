import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BiDotsVerticalRounded } from "react-icons/bi"
import { PiDotsSixVerticalBold } from "react-icons/pi"
import ModuleSubList from "./ModuleSubList";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <>
            <ul class="list-group">
                <li className="list-group-item">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <input value={module.name}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, name: e.target.value }))}
                                className="form-control me-2"
                            />
                            <textarea value={module.description}
                                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                                }
                                className="form-control me-2"
                            />
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-success me-1"
                                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                                Add</button>
                            <button className="btn btn-outline-info"
                                onClick={() => dispatch(updateModule(module))}>Update</button>
                        </div>

                    </div>
                </li>
            </ul>

            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <ul class="list-group" key={index}>

                        <li class="list-group-item  list-group-item-secondary d-flex">
                            <div class="list-icons">
                                <span>
                                    <PiDotsSixVerticalBold />
                                </span>
                            </div>
                            <div class="list-content flex-grow-1 ms-2">
                                <p>{module.name}</p>
                                <small>{module.description}</small>
                            </div>
                            <div class="list-menu">
                                <button className="btn btn-danger me-1"
                                    onClick={() => dispatch(deleteModule(module._id))}>Delete</button>

                                <button className="btn btn-success"
                                    onClick={() => dispatch(setModule(module))}>Update</button>
                                <i class="fa-solid fa-plus"></i>
                                <BiDotsVerticalRounded />
                            </div>
                        </li>
                        <ModuleSubList />
                    </ul>
                ))}
        </>
    );
}
export default ModuleList;
