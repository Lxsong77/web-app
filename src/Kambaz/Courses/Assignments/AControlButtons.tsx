import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AControlButtons(
  { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
  return (
    <div className="d-flex align-items-center">
      {/* <FaTrash className="text-danger mx-2 mb-1" data-bs-toggle="modal" data-bs-target={`#wd-delete-assignment-${assignmentId}-dialog`} />
      <DeleteAssignment assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
      */}
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} />
      <GreenCheckmark />

    </div>
  );
}