import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== verifyPassword) {
      setError('Passwords do not match');
      return;
    }
    // Add your signup logic here
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signup-screen" className="ms-5">
      <h1>Sign up</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="wd-username">
          <Form.Control
            type="text"
            placeholder="Username"
            className="mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="wd-password">
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="wd-verifypassword">
          <Form.Control
            type="password"
            placeholder="Verify Password"
            className="mb-2"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
        </Form.Group>

        {error && <div className="text-danger mb-2">{error}</div>}

        <Button id="wd-signup-btn" type="submit" className="btn btn-primary w-100 mb-2">
          Sign up
        </Button>
      </Form>

      <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}
