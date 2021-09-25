import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={email}
          placeholde="Email"
          required
          onChange={onChange}
        />
        <input
          type="text"
          value={password}
          placeholde="Password"
          required
          onChange={onChange}
        />
        <input type="text" value="Log In" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
