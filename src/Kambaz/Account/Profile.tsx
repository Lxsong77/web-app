import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button }  from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="ms-5">
      <h3>Profile</h3>
      <Form>
        <Form.Group controlId="wd-username">
          <Form.Control defaultValue="alice" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="wd-password">
          <Form.Control defaultValue="123" placeholder="Password" type="password" />
        </Form.Group>

        <Form.Group controlId="wd-firstname">
          <Form.Control defaultValue="Alice" placeholder="First Name" />
        </Form.Group>

        <Form.Group controlId="wd-lastname">
          <Form.Control defaultValue="Wonderland" placeholder="Last Name" />
        </Form.Group>

        <Form.Group controlId="wd-dob">
          <Form.Control defaultValue="mm/dd/yyyy" type="date" />
        </Form.Group>

        <Form.Group controlId="wd-email">
          <Form.Control defaultValue="alice@wonderland" type="email" />
        </Form.Group>

        <Form.Group controlId="wd-role">
          <Form.Select defaultValue="USER">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
        </Form.Group>

        <Button variant="danger" className="w-100 mt-3" 
         as={Link as any} to="/Kambaz/Account/Signin">
          Sign out
        </Button>
      </Form>
    </div>
  );
}
