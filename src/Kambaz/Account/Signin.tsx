import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="ms-5">
      <h1>Sign in</h1>
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

        <Button id="wd-signin-btn" type="submit" className="btn btn-primary w-100 mb-2">
          Sign in
        </Button>
      </Form>

      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div>
  );
}
