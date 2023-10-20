import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
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
                        <FaCircleCheck class="fa-solid fa-circle-check" /> Published
                        <button type="button" class="btn btn-outline-secondary ms-2">
                            <BsThreeDotsVertical />
                        </button>
                    </div>
                </div>
                <hr />
                <p>Assignment Name</p>
                <input value={assignment.title}
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
export default AssignmentEditor;