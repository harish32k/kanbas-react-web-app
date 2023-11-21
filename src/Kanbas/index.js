import { Link, Navigate, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";



function Kanbas() {
    //const API_BASE = "https://kanbas-node-server-app-6ntb.onrender.com";
    const API_BASE = process.env.REACT_APP_API_BASE;
    const [courses, setCourses] = useState([]);
    //const [courses, setCourses] = useState(db.courses);
    const URL = API_BASE+"/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);


    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });
    };


    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
        );
        setCourses(courses.filter(
            (c) => c._id !== course._id));
    };

    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
        setCourse({ name: "" });
    };


    return (
        <>
            <div className="flex-container">
                <Provider store={store} >
                    <KanbasNavigation />

                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} />} />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                    </Routes>
                </Provider>

            </div>
        </>

    );
}

export default Kanbas;