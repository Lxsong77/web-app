import { AiOutlineDashboard, AiOutlineMenu } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function KambazNavigation() {
  const { pathname } = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [moduleName, setModuleName] = useState('');

  useEffect(() => {
    const pathParts = pathname.split('/');
    const extractedCourseName = pathParts[3];
    const extractedModuleName = pathParts[pathParts.length - 1];
    setCourseName(`CS${extractedCourseName}`);
    setModuleName(extractedModuleName);
  }, [pathname]);

  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kambaz/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  const isActive = (path: string) => {
    const regex = new RegExp(`^${path}`);
    return regex.test(pathname);
  };

  return (
    <>
      <div className="d-block d-md-none bg-black text-white position-fixed top-0 start-0 w-100 z-3 d-flex align-items-center p-1">
        <button
          className="btn btn-dark me-2"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <AiOutlineMenu className="fs-4 text-white" />
        </button>
        <div className="flex-grow-1 text-center">
          <h5 className="m-0">{courseName}</h5>
          <h6 className="m-0">{moduleName}</h6>
        </div>
      </div>
      <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
        className={`rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 ${isNavVisible ? 'd-block' : 'd-none'}`}>
        <ListGroup.Item id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
          action className="bg-black border-0 text-center">
          <img src="/images/NEU.png" width="75px" />
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/Kambaz/Account" className={`text-center border-0 bg-black
          ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
          <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
          <br />
          Account
        </ListGroup.Item>
        {links.map((link) => (
          <ListGroup.Item key={link.path} as={Link} to={link.path} className={`bg-black text-center border-0
            ${isActive(link.path) ? "text-danger bg-white" : "text-white bg-black"}`}>
            <link.icon className={`fs-1 ${isActive(link.path) ? "text-danger" : "text-white"}`} />
            <br />
            {link.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}