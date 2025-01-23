export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={7} cols={47}>
        The assignment is available online. Submit a link to the landing page
        of your Web application running on Netlify. The landing page should
        include the following: Your full name and section Links to each of the
        lab assignments Link to the Kanbas application Links to all relevant
        source code repositories The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr> 
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade">
                <option>Percentage</option>
                <option>Number</option>
              </select>
            </td>
          </tr>
          <br />       
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>In person</option>
              </select>
              <fieldset>
                <legend>Online Entry Options</legend>
                <label>
                  <input type="checkbox" />
                  Text Entry
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  Website URL
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  Media Recordings
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  Student Annotation
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  File Uploads
                </label>
              </fieldset>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <select id="wd-assign-to">
                <option>Everyone</option>
                <option>Some Students</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" value="2024-05-13" />
              </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06" />
              <label htmlFor="wd-available-until"> Until</label>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>

      <div id="wd-buttons" style={{ textAlign: 'right' }}>
      <hr />
        <button id="wd-cancel">Cancel</button>
        <button id="wd-save">Save</button>
      </div>
    </div>
);}
