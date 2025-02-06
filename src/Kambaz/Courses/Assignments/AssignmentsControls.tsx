import { FaPlus } from "react-icons/fa6";
import { Button, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
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
