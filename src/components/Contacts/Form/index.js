import React, { useState, useEffect } from "react";

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ((form.fullName === "") | (form.phoneNumber === "")) {
      return false;
    }

    addContact([...contacts, form]);

    console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            placeholder="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={onChangeInput}
          ></input>
        </div>
        <div>
          <input
            placeholder="Phone Number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={onChangeInput}
          ></input>
        </div>

        <div className="btn">
          <button>ADD</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
