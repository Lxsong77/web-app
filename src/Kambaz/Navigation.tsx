import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineMenu } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaFlask } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function KambazNavigation() {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const getLinkClasses = (path: string) =>
    `list-group-item text-center border-0 ${
      location.pathname.startsWith(path) ? "bg-white text-danger" : "bg-black text-white"
    }`;

    const [courseName, setCourseName] = useState('');
    const [moduleName, setModuleName] = useState('');
  
    useEffect(() => {
      // Extracting the course name and module name from the URL
      const pathParts = location.pathname.split('/'); // Split pathname (e.g., /Kambaz/Courses/1234/Modules)
  
      // Assuming the course name is at the 3rd position and the module name is at the last
      const extractedCourseName = pathParts[3]; // For /Courses/1234, it would be '1234'
      const extractedModuleName = pathParts[pathParts.length - 1]; // For '/Modules', it would be 'Modules'
  
      setCourseName(`CS${extractedCourseName}`);
      setModuleName(extractedModuleName);
    }, [location.pathname]); // Dependency array ensures it re-runs when the URL changes
  

  return (
    <>
      {/* Top Black Bar (Visible on Small Screens Only) */}
      <div className="d-block d-md-none bg-black text-white position-fixed top-0 start-0 w-100 z-3 d-flex align-items-center p-1">
        {/* Left Icon for KambazNavigation */}
        <button
          className="btn btn-dark me-2"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <AiOutlineMenu className="fs-4 text-white" />
        </button>

        {/* Center: Course Name */}
        <div className="flex-grow-1 text-center">
          <h5 className="m-0">{courseName}</h5>
          <h6 className="m-0">{moduleName}</h6>
        </div>
      </div>
      {/* Top Left Icon
      <button
        id="toggle-kambaz-nav"
        className="btn btn-dark position-fixed top-0 start-0 m-2 d-md-none"
        onClick={() => setIsNavVisible(!isNavVisible)}
      >
        <AiOutlineMenu className="fs-3" />
      </button> */}

      {/* Navigation Menu */}
      <div
        id="wd-kambaz-navigation"
        style={{ width: 110 }}
        className={`list-group rounded-0 position-fixed bottom-0 top-0 bg-black z-2 ${
          isNavVisible ? "d-block" : "d-none"
        } d-md-block`}
      >
        <a
          id="wd-neu-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 text-center"
        >
          <img src="/images/NEU.png" alt="Northeastern" width="75px" />
        </a>

        <Link
          to="/Kambaz/Account"
          id="wd-account-link"
          className={getLinkClasses("/Kambaz/Account")}
        >
          <FaRegCircleUser className="fs-1" />
          <br />
          Account
        </Link>

        <Link
          to="/Kambaz/Dashboard"
          id="wd-dashboard-link"
          className={getLinkClasses("/Kambaz/Dashboard")}
        >
          <AiOutlineDashboard className="fs-1" />
          <br />
          Dashboard
        </Link>

        <Link
          to="/Kambaz/Courses/:cid/*"
          id="wd-course-link"
          className={getLinkClasses("/Kambaz/Courses")}
        >
          <LiaBookSolid className="fs-1" />
          <br />
          Courses
        </Link>

        <Link
          to="/Kambaz/Calendar"
          id="wd-calendar-link"
          className={getLinkClasses("/Kambaz/Calendar")}
        >
          <IoCalendarOutline className="fs-1" />
          <br />
          Calendar
        </Link>

        <Link
          to="/Kambaz/Inbox"
          id="wd-inbox-link"
          className={getLinkClasses("/Kambaz/Inbox")}
        >
          <FaInbox className="fs-1" />
          <br />
          Inbox
        </Link>

        <Link to="/Labs" id="wd-labs-link" className={getLinkClasses("/Labs")}>
          <FaFlask className="fs-1" />
          <br />
          Labs
        </Link>
      </div>
    </>
  );
}
