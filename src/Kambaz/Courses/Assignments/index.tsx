import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Modal, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AControlButtons from "./AControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AStatrControlButtons from "./AStartButtons";
import {addAssignment, deleteAssignment, setAssignments, updateAssignment} from "./reducer";

import * as client from "./client";
import "./Assignments.css";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);
  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
  };


  const removeAssignment = async (moduleId: string) => {
      await client.deleteAssignment(moduleId);
      dispatch(deleteAssignment(moduleId));
  };

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete._id));
      setAssignmentToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const handleDeleteCancel = () => {
    setAssignmentToDelete(null);
    setShowDeleteModal(false);
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
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
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
                      <div className="d-flex align-items-center">
                        <AControlButtons
                          assignmentId={assignment._id}
                          deleteAssignment={() => handleDeleteClick(assignment)}
                        />
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
      <div className="col float-end">
                                    <LessonControlButtons assignmentId={item._id}
                                                          deleteAssignment={(assignmentId) => {
                                                              removeAssignment(assignmentId)
                                                          }}/>
                                </div>
    </div>
  );
}