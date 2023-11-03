import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} from "../assignmentsReducer";

function AssignmentCreator() {
    //const { assignmentId } = useParams();
    //const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);

    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        dispatch(addAssignment({...assignment,  _id: new Date().getTime(), course: courseId}));
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <>

            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12">
                <div class="d-flex justify-content-between">
                    <div>

                    </div>
                    <div class="list-menu">
                        Not published yet
                        <button type="button" class="btn btn-outline-secondary ms-2">
                            <BsThreeDotsVertical />
                        </button>
                    </div>
                </div>
                <hr />
                <p>Assignment Name</p>
                <input value={assignment.title}
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
                    className="form-control mb-2" />
                <p>Assignment Description</p>
                <textarea value={assignment.description}
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
                    className="form-control mb-2" />
                <p>Due</p>
                <input type="date" value={assignment.due_date}
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, due_date: e.target.value }))}
                    className="form-control mb-2" />
                <p>Available from</p>
                <input type="date" value={assignment.available_from}
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, available_from: e.target.value }))}
                    className="form-control mb-2" />
                <p>Until</p>
                <input type="date" value={assignment.available_until}
                    onChange={(e) => dispatch(selectAssignment({ ...assignment, available_until: e.target.value }))}
                    className="form-control mb-2" />
                <div class="d-flex justify-content-between">
                    <div>
                    </div>
                    <div>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                            className="btn btn-outline-secondary me-2">
                            Cancel
                        </Link>
                        <button onClick={handleSave} className="btn btn-danger me-2">
                            Save
                        </button>

                    </div>
                </div>
                <hr />
            </div>

        </>

    );
}

export default AssignmentCreator;