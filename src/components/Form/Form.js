import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Form, Label, Input, Button } from "./Form.styled";

export default function SearchForm({ formSubmit }) {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    event.preventDefault();

    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      default:
        console.log(`Field type name - ${name} is not processed`);
    }

    if (name.trim() === "") {
      toast.error("Enter the name of the picture");
      return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    formSubmit({ name });

    reset();
  };

  const reset = () => setName("");

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
        />
      </Label>
      <Button type="submit">Search</Button>
    </Form>
  );
}
