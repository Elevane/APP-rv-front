import React from "react";

export default function CreateAccount() {
    const [Email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const handleSubmit = async e => {
        
    }

  return (
    <div id="">
      <h2> CreateAccount </h2>{" "}
      <form id="" onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="email"
            required
          />
        </p>{" "}
        <p>
          <input
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            placeholder="lastName"
            required
          />
        </p>{" "}
        <p>
          <input
            type="text"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            placeholder="firstName"
            required
          />
        </p>{" "}
        <p>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="password"
            required
          />
        </p>{" "}
        <p>
          <input type="submit" id="login" value="Login" />
        </p>{" "}
      </form>{" "}

    </div>
  );
}
