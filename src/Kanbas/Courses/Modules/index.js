import ModuleList from "./ModuleList";
import { BiDotsVerticalRounded } from "react-icons/bi"
import { PiDotsSixVerticalBold } from "react-icons/pi"
import { FaCircleCheck } from "react-icons/fa6"
import {FaCheck} from "react-icons/fa6"
import {FaBan} from "react-icons/fa6"
import { Link } from "react-router-dom";

function Modules() {
    return (
        <>
            <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12 ">
                <div class="d-flex justify-content-between">
                    <div>

                    </div>
                    <div class="float-end">
                        <button type="button" class="btn btn-outline-secondary me-1">Collapse all</button>
                        <button type="button" class="btn btn-outline-secondary me-1">View progress</button>
                        <div class="dropdown show" style={{ "display": "inline" }}>
                            <Link class="btn btn-outline-secondary dropdown-toggle" href="#" role="button"
                                id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <FaCircleCheck className="fa-solid fa-circle-check me-1"/> Publish all
                            </Link>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>

                        <button type="button" class="btn btn-danger ms-1 me-1"><i class="fa-solid fa-plus"></i>
                            Module</button>
                        <button type="button" class="btn btn-outline-secondary me-1">
                            <PiDotsSixVerticalBold/>
                        </button>
                    </div>
                </div>
                <hr />


                <ModuleList />

            </div>

        </>
    );
}
export default Modules;