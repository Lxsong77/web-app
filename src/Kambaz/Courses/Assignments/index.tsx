import { useParams, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AControlButtons from "./AControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AStatrControlButtons from "./AStartButtons";
import * as db from "../../Database";
import "./Assignments.css";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments">
      <br />
      <AssignmentsControls /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary"> 
            <div>
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <span className="ms-auto badge bg-secondary text-dark border border-black rounded-pill px-3 py-1">
              40% of Total
            </span>
            <AssignmentsControlButtons className="ms-3" />
          </div>
          
          <ListGroup className="wd-assignments rounded-0">
            {assignments.map((assignment) => (
              <div key={assignment._id} className="border-start border-4 border-success w-100">
                <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
                  <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                    <AStatrControlButtons className="me-3"/>
                    <div>
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="fw-bold text-black text-decoration-none"
                      >
                        {assignment.title}
                      </Link>
                      <br />
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span className="fw-bold">Not available until </span> May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                      <br />
                    </div>
                    <AControlButtons className="ms-3"/>  
                  </div>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}