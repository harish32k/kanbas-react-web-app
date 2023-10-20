import db from "../../Database";
import { useParams } from "react-router-dom";
import {FaFileExport, FaFileImport, FaGear} from "react-icons/fa6"
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="col-9">

            <div className="d-flex justify-content-end">

                <button type="button" className="btn btn-outline-secondary float-end me-2"><i
                    className="fa-solid fa-file-export"></i> 
                    <FaFileExport/> Export</button>
                <button type="button" className="btn btn-danger float-end me-2">
                    <FaFileImport/> Import</button>
                <button type="button" className="btn btn-outline-secondary float-end me-2">
                    <FaGear/></button>

            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-6" style={{ "font-weight": "bold" }}>
                        Student Names
                    </div>
                    <div className="col-6" style={{ "font-weight": "bold" }}>
                        Assignment Names
                    </div>
                </div>

                <div className="row">
                    <div className="col-6" style={{ "font-weight": "bold" }}>
                        <input type="text" placeholder="Search Students" className="form-control" />
                    </div>
                    <div className="col-6" style={{ "font-weight": "bold" }}>
                        <input type="text" placeholder="Search Assignments" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3" style={{ "font-weight": "bold" }}>
                        <button className="btn btn-outline-secondary"><i className="fa-solid fa-filter"></i> Apply filters</button>
                    </div>
                    <div className="col-9" style={{ "font-weight": "bold" }}>
                    </div>
                </div>

                <div className="row mt-3">

                    <div className="table-responsive">
                        <table className="table table-striped" border="1">
                            <thead>
                                <th>Student Name</th>
                                {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                            </thead>

                            <tbody>
                                {enrollments.map((enrollment) => {
                                    const user = db.users.find((user) => user._id === enrollment.user);
                                    return (
                                        <tr>
                                            <td>{user.firstName} {user.lastName}</td>
                                            {assignments.map((assignment) => {
                                                const grade = db.grades.find(
                                                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                                return (<td>{grade?.grade || ""}</td>);
                                            })}
                                        </tr>);
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>);
}
export default Grades;
