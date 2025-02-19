import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import { courses } from "../Database";

export default function CourseNavigation() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div>
      <button
        id="toggle-kambaz-nav"
        className="btn btn-dark position-fixed top-0 end-0 m-2 d-md-none"
        onClick={() => setIsNavVisible(!isNavVisible)}
        aria-label="Toggle course navigation"
        style={{
          zIndex: 3, // Ensure it's above the black bar
        }}
      >
        <AiOutlineMenu className="fs-2" />
      </button>

      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        {course && links.map((link) => (
          <NavLink
            key={link}
            to={`/Kambaz/Courses/${course._id}/${link}`}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={({ isActive }) =>
              `list-group-item ${isActive ? "active" : "text-danger"} border border-0
                z-2 ${isNavVisible ? "d-block" : "d-none"} d-md-block`
            }
          >
            {link}
          </NavLink>
        ))}
      </div>
    </div>
  );
}