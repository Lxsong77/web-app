import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { addAssignment, updateAssignment } from "./reducer";


export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const existingAssignment = assignments.find((assignment: any) => assignment._id === aid);
  const [assignment, setAssignment] = useState(existingAssignment || { 
    course: cid,
    title: "", 
    description: "", 
    points: 100, 
    due: "", 
    available: "", 
    until: "" });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveAssignment = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const cancelEdit = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br /><br />
      <input 
        id="wd-name" 
        value={assignment.title} 
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        style={{
          paddingLeft: "10px", 
          height: "45px", 
          backgroundColor: "transparent", 
          border: "1px solid #ced4da", 
          borderRadius: "4px",
          width: "100%",
          boxSizing: "border-box"
        }} 
      />
      <br /><br />

      <textarea
        id="wd-description"
        rows={15}
        cols={47}
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        style={{
          paddingLeft: "10px",
          backgroundColor: "transparent",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          width: "100%",
          boxSizing: "border-box",
          whiteSpace: "pre-wrap", 
        }}
      />
      <br /><br />
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "150px", whiteSpace: "nowrap", textAlign:"right", paddingRight: "10px" }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td style={{ width: "100%" }}>
              <input
                id="wd-points"
                value={assignment.points}
                onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
                style={{ width: "100%", height: "45px" }}
              />
            </td>
          </tr>
          <br />
          
          <tr style={{ width: "100%" }}>
            <td style={{ 
              width: "100px", 
              whiteSpace: "nowrap", 
              padding: "10px",
              borderTopLeftRadius: "10px", 
              borderBottomLeftRadius: "10px",
              verticalAlign: "top",
              textAlign:"right",
              paddingRight: "10px"
            }}>
              <label htmlFor="wd-assign">Assign</label>
            </td>

              <fieldset style={{ 
                width: "100%", 
                marginTop: "10px", 
                padding: "10px", 
                border: "2px solid gray", 
                borderRadius: "10px" 
              }}>
                
                {/* Assign to Section */}
                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="wd-assign-to" style={{ display: "block" }}>Assign to</label>
                  <select id="wd-assign-to" style={{ width: "100%", borderRadius: "5px", border: "1px solid gray", height: "45px" }}>
                    <option>Everyone</option>
                    <option>Some Students</option>
                  </select>
                </div>

                {/* Due Section */}
                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="wd-due-date" style={{ display: "block" }}>Due</label>
                  <input id="wd-due-date" 
                          type="date" 
                          value={assignment.due} 
                          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                          style={{ width: "100%", borderRadius: "5px", border: "1px solid gray", height: "45px" }} />
                </div>

                {/* Available from and Until Section */}
                <table style={{ width: "100%", marginBottom: "10px" }}>
                  <tbody>
                    {/* Row for Labels */}
                    <tr>
                      <td style={{ width: "50%", paddingRight: "10px" }}>
                        <label htmlFor="wd-available-from">Available from</label>
                      </td>
                      <td style={{ width: "50%" }}>
                        <label htmlFor="wd-available-until">Until</label>
                      </td>
                    </tr>

                    {/* Row for Inputs */}
                    <tr>
                      <td style={{ width: "50%", paddingRight: "10px" }}>
                        <input id="wd-available-from" 
                                type="date" 
                                value={assignment.available}
                                onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                                style={{ width: "100%", borderRadius: "5px", border: "1px solid gray", height: "45px" }} />
                      </td>
                      <td style={{ width: "50%" }}>
                        <input id="wd-available-until" 
                                type="date" 
                                value={assignment.until}
                                onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
                                style={{ width: "100%", borderRadius: "5px", border: "1px solid gray", height: "45px" }} />
                      </td>
                    </tr>
                  </tbody>
                </table>

              </fieldset>
          </tr>  

        </tbody>
      </table>

      <div id="wd-buttons" style={{ textAlign: 'right' }}>
        <hr />
        <Button variant="outline-secondary" size="lg" className="me-1" onClick={cancelEdit} id="wd-cancel-assignment">
          Cancel
        </Button>
        <Button variant="danger" size="lg" onClick={saveAssignment} id="wd-save-assignment">
          Save
        </Button>
      </div>
    </div>
  );
}