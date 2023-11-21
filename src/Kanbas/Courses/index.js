import db from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { AiOutlineMenu } from "react-icons/ai";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import AssignmentCreator from "./Assignments/AssignmentCreator";
import axios from "axios";
import { useEffect, useState } from "react";

function Courses({ courses }) {
    const { courseId } = useParams();
    //const course = db.courses.find((course) => course._id === courseId);
    //const course = courses.find((course) => course._id === courseId);

    //const API_BASE = "https://kanbas-node-server-app-6ntb.onrender.com";
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = API_BASE + "/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);

    return (
        <div class="content-holder flex-box">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-12 d-flex align-items-center mb-3">
                        <AiOutlineMenu id="menu-icon" className="mt-2" />

                        <nav aria-label="breadcrumb" >
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="Home">{courseId + " " + course.name}</Link></li>
                                <Routes>
                                    <Route path="Home" element={<li class="breadcrumb-item active" aria-current="page">Home</li>} />
                                    <Route path="Modules" element={<li class="breadcrumb-item active" aria-current="page">Modules</li>} />
                                    <Route path="Assignments" element={<li class="breadcrumb-item active" aria-current="page">Assignments</li>} />
                                    <Route
                                        path="Assignments/Create"
                                        element={<>
                                            <li class="breadcrumb-item" aria-current="page"><Link to={"/Kanbas/Courses/" + courseId + "/Assignments"}>Assignments</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">
                                                Create Assignment
                                            </li>
                                        </>
                                        }
                                    />
                                    <Route
                                        path="Assignments/:assignmentId"
                                        element={<>
                                            <li class="breadcrumb-item" aria-current="page"><Link to={"/Kanbas/Courses/" + courseId + "/Assignments"}>Assignments</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page">
                                                Edit Assignment
                                            </li>
                                        </>
                                        }
                                    />
                                    <Route path="Grades" element={<li class="breadcrumb-item active" aria-current="page">Grades</li>} />
                                </Routes>
                            </ol>
                        </nav>
                    </div>
                    <hr />
                </div>

                <div class="row">
                    <div class="col-2 account-navbar-column">
                        <CourseNavigation />
                    </div>
                    <>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route
                                path="Assignments/Create"
                                element={<AssignmentCreator />}
                            />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor />}
                            />
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </>

                    {/* <div class="col-8">

                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Courses;