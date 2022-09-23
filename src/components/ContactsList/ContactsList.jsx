const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
