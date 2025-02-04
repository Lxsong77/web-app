import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignment-controls" className="d-flex justify-content-between align-items-center">
      {/* Search Input Field (Left) */}
      <input
        type="text"
        placeholder="Search for Assignments"
        className="form-control"
        id="wd-search-assignment"
        style={{ width: "400px", height:"45px" }}
      />

      {/* Buttons (Right) */}
      <div className="d-flex">
        {/* Add Assignment Group Button */}
        <Button variant="outline-secondary" size="lg" className="me-2" id="wd-add-assignment-group">
          + Group
        </Button>

        {/* Add Assignment Button */}
        <Button variant="danger" size="lg" id="wd-add-assignment">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
      </div>
    </div>
  );
}
