import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { login } from "../../src/services/RestService";
import { AuthToken } from "../../src/services/AuthToken";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email ==> ", email);
    console.log("password == >", password);
    login(email, password).then(response =>
      AuthToken.storeToken(response.token)
    );
  }
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            style={{ marginBottom: 20 }}
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            style={{ marginBottom: 20 }}
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          size="lg"
          disabled={!validateForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
      <style jsx>{`
        .Login {
          padding: 60px;
        }

        .Login form {
          margin: 0 auto;
          max-width: 320px;
        }
      `}</style>
    </div>
  );
}
