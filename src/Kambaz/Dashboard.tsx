import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormControl, Row, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setEnrollments } from "./Enrollment/reducer";
import * as userClient from "./Account/client";



export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean; 
  setEnrolling: (enrolling: boolean) => void; 
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchEnrollments = async () => {
    let enrollments = [];
    try {
          enrollments = await userClient.findEnrollments();
      } catch (error) {
          console.error(error);
      }
      dispatch(setEnrollments(enrollments));
  };

  const toggleEnrolling = () => {
      setEnrolling(!enrolling);
  };

  useEffect(() => {
      fetchEnrollments();
  }, [dispatch]);


  return (
    <Container id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
        <>
        <h3>Course Editor</h3>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}
      <div className="d-flex">
          <h2 id="wd-dashboard-published">
              Published Courses ({courses.length})</h2>
          <Button className="ms-5" onClick={() => { toggleEnrolling() }}>
              {enrolling ? "My Courses" : "Enrollments"}</Button>
      </div>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}>
                <Card>
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img
                      src="/images/reactjs.jpg"
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </Card.Text>
                      {enrolling && (
                          <Button
                              onClick={(event) => {
                                  event.preventDefault();
                                  updateEnrollment(course._id, !course.enrolled);
                              }}
                              className="me-2 mb-2"
                          >
                              {course.enrolled ? "Unenroll" : "Enroll"}
                          </Button>
                      )}
                      {currentUser && (currentUser.role === "ADMIN" || 
                          currentUser.role === "FACULTY") && (<>
                          <Button variant="primary" onClick={
                              (event) => {
                                event.preventDefault();
                                navigate(`/Kambaz/Courses/${course._id}/Home`);
                              }} 
                              className="float-end" 
                              id="wd-go-course-click" 
                              style={{ marginLeft: "5px" }
                          }>Go</Button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>))}
        </Row>
      </div>
    </Container>
  );
}

