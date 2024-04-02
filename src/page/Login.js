import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthenticate, to }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user function issue");
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };
  return (
    <Container className="login-page">
      <Form className="login-form" onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="ID"
            onChange={(event) => setId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
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
