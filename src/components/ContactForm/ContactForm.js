import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { phoneOperations, phoneSelectors } from "redux/phonebook";
import { toast } from "react-toastify";

import shortid from "shortid";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const contacts = useSelector((state) => phoneSelectors.getContacts(state));
  const dispatch = useDispatch();

  const idName = shortid.generate();
  const idNumber = shortid.generate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (checkContacts(contacts, contactName)) {
      toast.error(`${contactName} is already in contacts.`);
    } else {
      dispatch(
        phoneOperations.addContacts({
          contactName,
          contactNumber,
        })
      );

      setContactName("");
      setContactNumber("");
    }
  };

  const checkContacts = (arr, target) => {
    return arr.find(
      ({ contactName }) => contactName.toLowerCase() === target.toLowerCase()
    );
  };

  const changeInput = ({ target: { name, value } }) =>
    name === "name" ? setContactName(value) : setContactNumber(value);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={idName}>
        <p className={s.title}>Name</p>

        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={contactName}
          onChange={changeInput}
          id={idName}
          className={s.input}
        />
      </label>

      <label htmlFor={idNumber}>
        <p className={s.title}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={contactNumber}
          onChange={changeInput}
          id={idNumber}
          className={s.input}
        />
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}
