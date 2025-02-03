import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Dashboard() {
  return (
    <Container fluid className="dashboard-container">

      <div className="dashboard-content" style={{ paddingLeft: "40px" }}>
        <h1 className="dashboard-title">Dashboard</h1>
        <hr />
        <h2 className="dashboard-subtitle">Published Courses (12)</h2>
        <hr />
        
        <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={4} className="g-4">
          {courses.map((course) => (
            <Col key={course.id} className="d-flex justify-content-center">
              <Card style={{ width: "260px", marginBottom: "35px" }} className="course-card">
                <Link to={`/Kambaz/Courses/${course.id}/Home`} className="text-decoration-none text-dark">
                  <Card.Img variant="top" src={course.image} height={160} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

const courses = [
  { id: 1234, title: "CS1234 React JS", description: "Full Stack Developer", image: "/images/reactjs.jpg" },
  { id: 5001, title: "CS5001 Foundations", description: "Learn Python", image: "/images/5001.jpg" },
  { id: 5002, title: "CS5002 Discrete Structures", description: "Learn Math", image: "/images/5002.jpg" },
  { id: 5003, title: "CS5003 Recitation", description: "Practice Coding", image: "/images/5003.jpg" },
  { id: 5004, title: "CS5004 OOP Design", description: "Learn Java", image: "/images/5004.jpg" },
  { id: 5005, title: "CS5005 Algorithms", description: "Learn Algorithms", image: "/images/5005.jpg" },
  { id: 5006, title: "CS5006 Systems", description: "Computer Foundations", image: "/images/5006.jpeg" },
  { id: 5007, title: "CS5007 Data Structures", description: "Manage Data", image: "/images/5007.jpeg" },
  { id: 5008, title: "CS5008 AI Fundamentals", description: "Explore AI", image: "/images/5008.jpg" },
  { id: 5009, title: "CS5009 Cybersecurity", description: "Security Basics", image: "/images/5009.jpg" },
  { id: 5010, title: "CS5010 Web Development", description: "Build Websites", image: "/images/5010.jpg" },
  { id: 5011, title: "CS5011 Mobile Apps", description: "Develop Apps", image: "/images/5011.jpg" }
];
