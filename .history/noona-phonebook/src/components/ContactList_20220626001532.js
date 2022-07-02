import React from "react";
import { SearchBox } from "./SearchBox";
import { ContactItem } from "./ContactItem";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <SearchBox />
      <ContactItem />
    </div>
  );
};
