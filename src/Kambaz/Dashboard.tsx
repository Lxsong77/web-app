import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormControl, Row, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addEnrollment, deleteEnrollment } from "./Enrollment/reducer";
import * as enrollmentClient from "./Enrollment/client";


export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleEnrollToggle = async (courseId: string, isEnrolled: boolean) => {
    if (isEnrolled) {
      await enrollmentClient.createEnrollment(currentUser._id, courseId);
      dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
    } else {
      await enrollmentClient.deleteEnrollment(currentUser._id, courseId);
      dispatch(deleteEnrollment({ user: currentUser._id, course: courseId }));
    }
  };

  const isStudent = currentUser.role === "STUDENT";


  return (
    <Container id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isStudent && (
        <Button
          variant="primary"
          className="float-end"
          id="wd-toggle-enrollments"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </Button>
      )}
      {!isStudent && (
        <>
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
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => {
              const isEnrolled = enrollments.some(
                (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id,
              );
            return (
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
                      {isStudent && (
                        <Button
                          variant={isEnrolled ? "danger" : "success"}
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnrollToggle(course._id, isEnrolled);
                          }}
                          className="float-end"
                          id={isEnrolled ? "wd-unenroll-course-click" : "wd-enroll-course-click"}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      )}
                      {!isStudent && (
                        <>
                          <Button variant="primary" onClick={
                            (event) => {
                              event.preventDefault();
                              navigate(`/Kambaz/Courses/${course._id}/Home`);
                            }
                          } className="float-end" id="wd-go-course-click" style={{ marginLeft: "5px" }
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
              </Col>
            );
          })} 
        </Row>
      </div>
    </Container>
  );
}