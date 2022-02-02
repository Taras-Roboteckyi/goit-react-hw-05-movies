import { useState } from "react";
import { nanoid } from "nanoid";

import {
  FormPhoneBook,
  LabelPhoneBook,
  InputPhoneBook,
  ButtonPhoneBook,
} from "./Form.styled";

export default function ContactForm({ formSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleNameChange = (event) => {
    event.preventDefault();

    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        console.log(`Field type name - ${name} is not processed`);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    formSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <FormPhoneBook onSubmit={handleSubmit}>
      <LabelPhoneBook htmlFor={nameInputId}>
        Name
        <InputPhoneBook
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
        />
      </LabelPhoneBook>
      <LabelPhoneBook htmlFor={numberInputId}>
        Number
        <InputPhoneBook
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          value={number}
          onChange={handleNameChange}
          id={numberInputId}
        />
      </LabelPhoneBook>
      <ButtonPhoneBook type="submit">Add contact</ButtonPhoneBook>
    </FormPhoneBook>
  );
}
