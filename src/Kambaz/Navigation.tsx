import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaFlask } from "react-icons/fa6";

export default function KambazNavigation() {
  const location = useLocation();

  const getLinkClasses = (path: string) =>
    `list-group-item text-center border-0 ${
      location.pathname.startsWith(path) ? "bg-white text-danger" : "bg-black text-white"
    }`;

  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed 
      bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" alt="Northeastern" width="75px" />
      </a>

      <Link to="/Kambaz/Account" id="wd-account-link" 
        className={getLinkClasses("/Kambaz/Account")}>
        <FaRegCircleUser className="fs-1" />
        <br />
        Account
      </Link>

      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link" 
        className={getLinkClasses("/Kambaz/Dashboard")}>
        <AiOutlineDashboard className="fs-1" />

        <br />
        Dashboard
      </Link>

      <Link to="/Kambaz/Courses/:cid/*" id="wd-course-link" 
        className={getLinkClasses("/Kambaz/Courses")}>
        <LiaBookSolid className="fs-1" />
        <br />
        Courses
      </Link>

      <Link to="/Kambaz/Calendar" id="wd-calendar-link" 
        className={getLinkClasses("/Kambaz/Calendar")}>
        <IoCalendarOutline className="fs-1" />
        <br />
        Calendar
      </Link>

      <Link to="/Kambaz/Inbox" id="wd-inbox-link" 
        className={getLinkClasses("/Kambaz/Inbox")}>
        <FaInbox className="fs-1" />
        <br />
        Inbox
      </Link>

      <Link to="/Labs" id="wd-labs-link" 
        className={getLinkClasses("/Labs")}>
        <FaFlask className="fs-1" />
        <br />
        Labs
      </Link>
    </div>
  );
}

