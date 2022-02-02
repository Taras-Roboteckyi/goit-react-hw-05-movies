import { useState } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import useLocalStorage from "./components/Hooks/useLocalStorage";

import { Container } from "./App.global.styled";
import { TitlePhoneBook, TitleContacts, Section } from "./App.styled";

const LocalStorageKey = "contactsKey";

export default function App() {
  const [contacts, setContacts] = useLocalStorage(LocalStorageKey, []);

  const [filter, setFilter] = useState("");

  const formSubmitHandler = (data) => {
    const { name } = data;
    const normalizedNameContact = name.toLowerCase();

    const newId = { id: nanoid(), ...data };

    findContactName(normalizedNameContact)
      ? alert(`${name} is already in contacts.`)
      : setContacts((previousState) => [...previousState, newId]);

    /* console.log(newId); */
  };

  const findContactName = (nameData) => {
    return contacts.find(({ name }) => name.toLowerCase() === nameData);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) => prevState.filter(({ id }) => id !== contactId));
  };

  const changeFilter = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Section>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm formSubmit={formSubmitHandler}></ContactForm>
      </Section>

      <Section>
        <TitleContacts>Contacts</TitleContacts>

        <Filter value={filter} onChange={changeFilter}></Filter>

        <ContactList
          visibleContact={getFilterContact()}
          onDeleteContact={deleteContact}
        ></ContactList>
      </Section>
    </Container>
  );
}
