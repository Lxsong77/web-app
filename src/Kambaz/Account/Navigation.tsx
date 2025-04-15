import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.includes("Signin") && (
        <NavLink
          to="/Kambaz/Account/Signin"
          id="wd-account-signin-link"
          className={({ isActive }) =>
            `list-group-item ${isActive ? "active" : "text-danger"} border border-0`
          }
        >
          Signin
        </NavLink>
      )}
      {links.includes("Signup") && (
        <NavLink
          to="/Kambaz/Account/Signup"
          className={({ isActive }) =>
            `list-group-item ${isActive ? "active" : "text-danger"} border border-0`
          }
        >
          Sign up
        </NavLink>
      )}
      {links.includes("Profile") && (
        <NavLink
          to="/Kambaz/Account/Profile"
          className={({ isActive }) =>
            `list-group-item ${isActive ? "active" : "text-danger"} border border-0`
          }
        >
          Profile
        </NavLink>
      )}
       {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
  );
}
