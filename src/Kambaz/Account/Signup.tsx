import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="ms-5">
      <h1>Sign up</h1>
      <Form>
        <Form.Group controlId="wd-username">
          <Form.Control
            type="text"
            placeholder="Username"
            className="mb-2"
          />
        </Form.Group>

        <Form.Group controlId="wd-password">
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-2"
          />
        </Form.Group>
        <Form.Group controlId="wd-verifypassword">
          <Form.Control
            type="verifypassword"
            placeholder="Verify Password"
            className="mb-2"
          />
        </Form.Group>

        <Button id="wd-signup-btn" type="submit" className="btn btn-primary w-100 mb-2">
          Sign up
        </Button>
      </Form>

      <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>
);}
