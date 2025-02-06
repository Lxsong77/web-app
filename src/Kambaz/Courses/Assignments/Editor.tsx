import { Button } from "react-bootstrap";


export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      
      <label htmlFor="wd-name">Assignment Name</label><br /><br />
      
      <input 
        id="wd-name" 
        value="A1" 
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
        style={{
          paddingLeft: "10px",
          backgroundColor: "transparent",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          width: "100%",
          boxSizing: "border-box",
          whiteSpace: "pre-wrap", 
        }}
        defaultValue={`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

· Your full name and section
· Links to each of the lab assignments
· Link to the Kanbas application
· Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
    />
      <br /><br />
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "150px", whiteSpace: "nowrap", textAlign:"right", paddingRight: "10px" }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td style={{ width: "100%" }}>
              <input id="wd-points" value={100} style={{ width: "100%", height: "45px" }} />
            </td>
          </tr>
          <br />
          <tr>
            <td style={{ width: "150px", whiteSpace: "nowrap", textAlign:"right", paddingRight: "10px" }}>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td style={{ width: "100%" }}>
              <select id="wd-group" style={{ width: "100%", height: "45px"  }}>
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td style={{ width: "150px", whiteSpace: "nowrap", textAlign:"right", paddingRight: "10px" }}>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td style={{ width: "100%" }}>
              <select id="wd-display-grade" style={{ width: "100%", height: "45px" }}>
                <option>Percentage</option>
                <option>Number</option>
              </select>
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
              verticalAlign: "top", textAlign:"right", paddingRight: "10px"
            }}>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <fieldset style={{ 
                width: "100%", 
                marginTop: "10px", 
                padding: "10px", 
                border: "2px solid gray", 
                borderRadius: "10px" 
              }}>
              <select id="wd-submission-type" 
              style={{width: "100%",display: "block", 
                      borderRadius: "5px", border: "1px solid gray", 
                      height: "45px", boxSizing: "border-box" }}>
                <option>Online</option>
                <option>In person</option>
              </select>
              <br />
                <legend style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Online Entry Options</legend>
                <label><br />
                  <input type="checkbox" /> Text Entry
                </label>
                <br /><br />
                <label>
                  <input type="checkbox" /> Website URL
                </label>
                <br /><br />
                <label>
                  <input type="checkbox" /> Media Recordings
                </label>
                <br /><br />
                <label>
                  <input type="checkbox" /> Student Annotation
                </label>
                <br /><br />
                <label>
                  <input type="checkbox" /> File Uploads
                </label>
            </fieldset>
          </tr>

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
                  <input id="wd-due-date" type="date" value="2024-05-13" style={{ width: "100%", borderRadius: "5px", border: "1px solid gray", height: "45px" }} />
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
                        <input id="wd-available-from" type="date" value="2024-05-06" 
                          style={{ width: "100%", borderRadius: "5px", border: "1px solid gray", height: "45px" }} />
                      </td>
                      <td style={{ width: "50%" }}>
                        <input id="wd-available-until" type="date" value="2024-05-20" 
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
      <Button variant="outline-secondary" size="lg" className="me-1" id="wd-add-assignment-group">
          Cancel
        </Button>
      <Button variant="danger" size="lg" id="wd-add-assignment">
          Save
        </Button>
      </div>
    </div>
);}
