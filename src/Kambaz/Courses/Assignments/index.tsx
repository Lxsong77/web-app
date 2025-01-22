export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/A1"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> 
          <div className="wd-assignment-details">
            Multiple Modules | <span className="wd-availability">Not available until May 6 at 12:00am</span> | <span className="wd-due">Due May 13 at 11:59pm</span> | <span className="wd-points">100 pts</span>
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/A2"
              className="wd-assignment-link">
              A2 - CSS + BOOTSTRAP
            </a>
            <div className="wd-assignment-details">
              Multiple Modules | <span className="wd-availability">Not available until May 13 at 12:00am</span> | <span className="wd-due">Due May 20 at 11:59pm</span> | <span className="wd-points">100 pts</span>
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/A3"
              className="wd-assignment-link" >
              A3 - JAVASCRIPT + REACT
            </a>
            <div className="wd-assignment-details">
              Multiple Modules | <span className="wd-availability">Not available until May 20 at 12:00am</span> | <span className="wd-due">Due May 27 at 11:59pm</span> | <span className="wd-points">100 pts</span>
            </div>
          </li>
      </ul>
    </div>
);}
