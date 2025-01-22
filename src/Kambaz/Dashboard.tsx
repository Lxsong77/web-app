import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5001/Home"
                className="wd-dashboard-course-link" >
            <img src="images/5001.jpg" width={200} />
            <div>
              <h5> CS5001 Intensive Foundations of CS </h5>
              <p className="wd-dashboard-course-title">
                learn Python  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5002/Home"
                className="wd-dashboard-course-link" >
            <img src="images/5002.jpg" width={200} />
            <div>
              <h5> CS5002 Discrete Structures</h5>
              <p className="wd-dashboard-course-title">
                  Learn Math</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5003/Home"
                className="wd-dashboard-course-link" >
            <img src="images/5003.jpg" width={200} />
            <div>
              <h5> CS5003  Recition fro CS5001 </h5>
              <p className="wd-dashboard-course-title">
              Pracitice  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5004/Home"
                className="wd-dashboard-course-link" >
            <img src="images/5004.jpg" width={200} />
            <div>
              <h5> CS5004: Object-Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Learn JAVA  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5005/Home"
                className="wd-dashboard-course-link" >
            <img src="images/5005.jpg" width={200} />
            <div>
              <h5> CS5005 Algorithm </h5>
              <p className="wd-dashboard-course-title">
                Learn Algorithm  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5006/Home"
                className="wd-dashboard-course-link" >
            <img src="images/5006.jpeg" width={200} />
            <div>
              <h5> CS5006 Computer system </h5>
              <p className="wd-dashboard-course-title">
                Learn foundation </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5007/Home"
                className="wd-dashboard-course-link" >
            <img src="images/5007.jpeg" width={200} />
            <div>
              <h5> CS5007 Data Structure </h5>
              <p className="wd-dashboard-course-title">
                Management Data  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
                                        
      </div>
    </div>
);}

  