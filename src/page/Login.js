import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user function issue");
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container className="login-page">
      <Form className="login-form" onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="ID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit">
          로그인
        </Button>{" "}
        <Button variant="secondary" size="lg">
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
