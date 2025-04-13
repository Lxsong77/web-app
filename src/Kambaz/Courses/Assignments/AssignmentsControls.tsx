
import { FaPlus } from "react-icons/fa6";
import { Button, FormControl } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function AssignmentsControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();

  return (
    <div id="wd-assignment-controls" className="d-flex justify-content-between align-items-center">
      {/* Search Input Field (Left) */}
      <div className="position-relative" style={{ width: "400px" }}>
        <FaSearch 
          className="position-absolute text-secondary"
          style={{
            top: "50%",
            left: "12px",
            transform: "translateY(-50%)",
            pointerEvents: "none"
          }}
        />
        <FormControl
          type="text"
          placeholder="  Search..."
          id="wd-search-assignment"
          style={{ paddingLeft: "35px", height: "45px", backgroundColor: "transparent" }}
        />
      </div>

      <div className="col">
          {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
              <div className="d-flex justify-content-end">
                  <Button className="mb-2 me-2" variant="secondary me-1">+ Group</Button>
                  <Link className="btn bg-danger text-white mb-2 me-3" to={`/Kambaz/Courses/${cid}/Assignments/New`} >+ Assignment</Link>
              </div>
          </>)}
      </div>

     
    </div>
  );
}

