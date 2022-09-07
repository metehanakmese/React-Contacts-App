import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullName: "Eylül", phoneNumber: "111444" },
    { fullName: "Nazlı", phoneNumber: "222555" },
    { fullName: "Yağmur", phoneNumber: "333666" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="contacts">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
