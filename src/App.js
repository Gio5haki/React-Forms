import React, { useState } from "react";
import User from "./components/User";
import "./styles.css";

export default function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [users, setUsers] = useState([
    {
      firstname: "Aria",
      lastname: "Groult",
      status: "online"
    },
    {
      firstname: "Dennis",
      lastname: "Felix",
      status: "offline"
    }
  ]);

  function firstnameHandler(event) {
    setFirstname(event.target.value);
  }

  function lastnameHandler(event) {
    setLastname(event.target.value);
  }

  function submitHandler(event) {
    if (!firstname.length || !lastname.length) alert("Hey fill up the form");
    event.preventDefault();
  }

  function myFunction(event) {
    alert(event);
    setTitle("My Title");
  }

  return (
    <div className="App">
      {users.map((element, index) => (
        <User
          firstname={element.firstname}
          lastname={element.lastname}
          status={element.status}
          onClickHandler={myFunction}
        />
      ))}
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Listen to every change (event <b>onChange</b>) and store each value
            in a State.
          </li>
          <li>
            Listen to the <b>submit</b> event and if one field is empty, show an
            alert.
          </li>
        </ul>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/forms.html"
        >
          Help
        </a>
      </div>
      <div className="block">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Name" onChange={firstnameHandler} />
          <br />
          <input
            type="text"
            placeholder="First Name"
            onChange={lastnameHandler}
          />
          <br />
          <button>Valider</button>
        </form>
      </div>
    </div>
  );
}
