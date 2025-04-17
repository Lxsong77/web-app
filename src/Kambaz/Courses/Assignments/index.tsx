import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Modal, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AControlButtons from "./AControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AStatrControlButtons from "./AStartButtons";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";
import { deleteAssignment, setAssignments } from "./reducer";
import "./Assignments.css";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);
  
  
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
      fetchAssignments();
  }, []);

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (assignmentToDelete) {
      deleteAssignmentHandler(assignmentToDelete);
      // dispatch(deleteAssignment(assignmentToDelete._id));
      // setAssignmentToDelete(null);
      // setShowDeleteModal(false);
    }
  };

  const handleDeleteCancel = () => {
    setAssignmentToDelete(null);
    setShowDeleteModal(false);
  };

  const deleteAssignmentHandler = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
    setShowDeleteModal(false); 
  };


  const fetchAssignmentsForCourse = async () => {
      const assignments = await coursesClient.findAssignmentsForCourse(cid!);
      dispatch(setAssignments(assignments));
  };

  useEffect(() => {
      fetchAssignmentsForCourse();
  }, [cid]);

  const formatDate = (isoDate: string | null | undefined) => {
    if (!isoDate) return "N/A"; // Handle null or undefined dates
    const date = new Date(isoDate);
    return date.toISOString().split("T")[0];
  };

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
            {assignments.map((assignment: any) => (
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
                        <b>Available from</b> {formatDate(assignment.available)} |{" "}
                        <b>Until</b> {formatDate(assignment.until)} |{" "} 
                        <b>Due</b> {assignment.due} | 
                        {assignment.points} pts
                                    
                        
                        <br />
                      </div>
                      <div className="d-flex align-items-center">
                      {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                        <AControlButtons
                          assignmentId={assignment._id}
                          deleteAssignment={() => handleDeleteClick(assignment._id)}
                        />
                        </>)}
                        <IoEllipsisVertical className="fs-4" />
                      </div>
                    </div>
                  </ListGroup.Item>
                </div>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>

      <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}