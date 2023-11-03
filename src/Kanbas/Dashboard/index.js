import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css";
import { BiDotsVerticalRounded, BiSolidEditAlt } from "react-icons/bi";
import { useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {
    //const courses = db.courses;
    

    return (
        <div class="content-holder flex-box">
            <div class="container-fluid ms-2">
                <div class="row">
                    <div class="col-12">
                        <span id="name-header" style={{ "font-size": "2em" }}>Dashboard</span>
                        <hr />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 ms-5">
                        <span><span id="courses-header">Published courses ({courses.length})</span></span>
                        <hr />
                    </div>
                </div>
                <div className="row ms-5">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="d-flex justify-content-between  me-5">
                            <div className="me-3"><input value={course.name} className="form-control"
                                onChange={(e) => setCourse({ ...course, name: e.target.value })} /></div>
                            <div className="me-3"><input value={course.number} className="form-control"
                                onChange={(e) => setCourse({ ...course, number: e.target.value })} /></div>
                            <div className="me-3"><input value={course.startDate} className="form-control" type="date"
                                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} /></div>
                            <div className="me-3"><input value={course.endDate} className="form-control" type="date"
                                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} /></div>
                        </div>

                        <div className="float-end">
                            <button type="button" className="me-2 btn btn-danger" onClick={addNewCourse}>+ Add</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={updateCourse}>+ Update</button>
                        </div>

                        <hr />
                    </div>
                </div>
                <div class="container-fluid d-flex flex-row and flex-wrap">

                    <div class="row ms-4">
                        {courses.map((course) => (
                            <div className="card card-style col-3 col-md-6 col-sm-12 col-xs-12" style={{ "width": "270px" }}>
                                <div className="card-icon">
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                                <img src="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    className="card-img-top w-100"
                                    alt="Photo by Julissa Helmuth from Pexels: https://www.pexels.com/photo/white-and-black-siberian-husky-puppy-on-brown-grass-field-3726315/" />

                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                                            {course.name}
                                        </Link>
                                        {/* <a href="/kanbas/home.html">{course.name} SEC 01 Fall 2023 [VTL-2-OL]</a> */}
                                    </h5>
                                    <span className="card-text text-big-card">{course._id}</span>
                                    <p className="card-text">
                                        Some quick example text to build on the card
                                        title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-outline-danger"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit <BiSolidEditAlt className="fa-regular fa-pen-to-square" style={{ color: "crimson" }} />
                                    </button>
                                    {/* <Link to={`/Kanbas/Courses/${course._id}`}><BiSolidEditAlt className="fa-regular fa-pen-to-square" style={{ color: "crimson" }} /></Link> */}
                                    <button className="btn btn-danger float-end"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Dashboard;
