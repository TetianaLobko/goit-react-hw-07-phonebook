import React from "react";
import s from "./ContactList.module.css";
import IconButton from "../IconButton/";
import { ReactComponent as AddIcon } from "../../icons/delete.svg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { phoneOperations, phoneSelectors } from "redux/phonebook";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) =>
    phoneSelectors.getVisibleContacts(state)
  );
  useEffect(() => dispatch(phoneOperations.fetchContacts()), [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ contactName, contactNumber, id }) => (
        <li key={id} className={s.item}>
          {contactName}: {contactNumber}
          <IconButton onClick={() => dispatch(phoneOperations.deleteContacts(id))}>
            <AddIcon width="15" height="15" fill="#fff" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
