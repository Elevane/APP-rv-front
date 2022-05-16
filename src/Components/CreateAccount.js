import React from "react";
import "../Components/style/Login.css"
import Header from "./Header";
import swal from "sweetalert2";


async function register(email, password, username) {
  const user = {
    username : username,
    email: email,
    password: password,
  };
  return fetch("https://localhost:7139/api/Users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
    },
    body: JSON.stringify(user),
  }).then((data) => data.json());
}


export default function CreateAccount() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [username, setUserName] = React.useState();

    const handleSubmit = async e => {
        e.preventDefault();
        let response = await register(email, password, username).then((value) => {
          if (!value.isSuccess) {
            new swal("Failed connection Error", value.errorMessage, "error");
          }
          if (value.result === undefined) {
            new swal("Failed connection Error", "", "error");
          }
    
          localStorage.setItem(
            "user",
            JSON.stringify({ user: value.result, auth: true })
          );
          console.log(value.result);
          window.location.href = "/home"
        });
    }

  return (

    <div  id="login-form-wrap">
      <h2 className="pb-2"> Create account </h2>{" "}
      <form id="login-form" onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
            required
          />
        </p>{" "}
        <p>
          <input
            type="text"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            name="username"
            placeholder="username"
            required
          />
        </p>{" "}
     
        <p>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            required
          />
        </p>{" "}
        <p>
          <input type="submit" id="create" value="create" />
        </p>{" "}
      </form>{" "}
      <div id="create-account-wrap">
        <p>
          {" "}
          Already a member, {" "}
          <a href="/login">
            {"   "}
            Login{" "}
          </a>
        </p>
      </div>{" "}
    </div>

  );
}
