import { BiDotsVerticalRounded } from "react-icons/bi"
import { PiDotsSixVerticalBold } from "react-icons/pi"
import { FaCircleCheck } from "react-icons/fa6"
import {FaCheck} from "react-icons/fa6"
import {FaBan} from "react-icons/fa6"

function HomeRightBar() {
    return (
        <>
            <h5>Course status</h5>

            <div class="btn-group mb-3" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-secondary"><FaBan />
                    Unpublish</button>
                <button type="button" class="btn btn-success"><FaCheck />
                    Published</button>
            </div>

            <div class="d-grid gap-2">
                <button type="button" class="btn btn-outline-secondary">Import existing content</button>
                <button type="button" class="btn btn-outline-secondary">Import from commons</button>
                <button type="button" class="btn btn-outline-secondary">Choose home page</button>
                <button type="button" class="btn btn-outline-secondary">View course stream</button>
                <button type="button" class="btn btn-outline-secondary">New announcement</button>
                <button type="button" class="btn btn-outline-secondary">New analytics</button>
                <button type="button" class="btn btn-outline-secondary">View course notifications</button>
            </div>
            <br />
            <h5>To do</h5>
            <hr />
            <p><a href="#">Grade - Assignment 1</a></p>
            <p class="lighter-text">100 points. Sep 18 at 9:30 PM</p>
            <br />
            <h5>Coming up</h5>
            <hr />
            <p><a href="#">Lecture</a></p>
            <p class="lighter-text">Online lecture</p>
            <p class="lighter-text">Sep 11 at 11:45 am</p>
        </>
    );
}
export default HomeRightBar;