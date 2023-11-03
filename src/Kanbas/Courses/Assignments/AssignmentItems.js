import { useParams } from "react-router";
import db from "../../Database";
import { Link } from "react-router-dom";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    selectAssignment,
} from "./assignmentsReducer";
import { Button } from "bootstrap";

function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

function AssignmentItems() {
    const { courseId } = useParams();

    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        courseAssignments.map((assignment) => (
            <li class="list-group-item d-flex green-border" key={assignment._id}>

                <div class="list-icons">
                    <span>
                        <PiDotsSixVerticalBold />
                        <BiEdit className="fa-regular fa-pen-to-square" />
                    </span>
                </div>
                <div class="list-content flex-grow-1 ms-2">
                    <Link className="list-link" style={{ color: "black", fontWeight: "500" }}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`
                        }
                        onClick={() => dispatch(selectAssignment(assignment))}
                    >
                        {assignment.title}
                    </Link>
                    <p>

                        <span><Link>Multiple modules</Link> | </span>
                        <span>Due {(assignment.due_date)} at 11:59 PM</span> | 100 pts
                    </p>
                </div>
                <div class="list-menu">
                    <button class="btn btn-danger me-2" onClick={() => dispatch(deleteAssignment(assignment._id))}>Delete</button>
                    <FaCircleCheck className="fa-solid fa-circle-check me-1" />
                    <FaEllipsisVertical />
                </div>
            </li>
        ))

    );
}

export default AssignmentItems;