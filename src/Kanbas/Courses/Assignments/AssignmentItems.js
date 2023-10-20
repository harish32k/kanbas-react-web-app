import { useParams } from "react-router";
import db from "../../Database";
import { Link } from "react-router-dom";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";

function AssignmentItems() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        courseAssignments.map((assignment) => (
            <li class="list-group-item d-flex green-border" key={assignment._id}>

                <div class="list-icons">
                    <span>
                        <PiDotsSixVerticalBold />
                        <BiEdit className="fa-regular fa-pen-to-square"/>
                    </span>
                </div>
                <div class="list-content flex-grow-1 ms-2">
                    <Link className="list-link" style={{color: "black", fontWeight: "500"}}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    >
                        {assignment.title}
                    </Link>
                    <p>
                        
                        <span><Link>Multiple modules</Link> | </span>
                        <span>Due Sep 18, 2023 at 11:59 PM</span> | 100 pts
                    </p>
                </div>
                <div class="list-menu">
                    <FaCircleCheck className="fa-solid fa-circle-check me-1" />
                    <FaEllipsisVertical/>
                </div>
            </li>
        ))

    );
}

export default AssignmentItems;