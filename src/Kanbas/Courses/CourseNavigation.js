import { Link, useParams, useLocation } from "react-router-dom";
import "./course-settings.css"
function CourseNavigation() {
    const links = [
        { to: 'Home', text: 'Home' },
        { to: 'Modules', text: 'Modules' },
        { to: '#', text: 'Piazza' },
        { to: '#', text: 'Zoom Meetings' },
        { to: 'Assignments', text: 'Assignments' },
        { to: '#', text: 'Quizzes' },
        { to: 'Grades', text: 'Grades' },
        { to: '#', text: 'People' },
        { to: '#', text: 'Panopto Video' },
        { to: '#', text: 'Discussions' },
        { to: '#', text: 'Announcements' },
        { to: '#', text: 'Pages' },
        { to: '#', text: 'Files' },
        { to: '#', text: 'Rubrics' },
        { to: '#', text: 'Outcomes' },
        { to: '#', text: 'Collaborations' },
        { to: '#', text: 'Syllabus' },
        { to: '#', text: 'Settings' },
    ];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 150 }}>
            <div class="account-navbar-column">
                <ul id="account-navbar">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to} className={`acc-link ${pathname.includes(link.to) && "selected-navbar"}`}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
            </div>

        </div>
    );
}
export default CourseNavigation;