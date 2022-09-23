const ContactsList = ({ contacts }) => {
  return (
    <ol>
      {contacts.map(el => (
        <li key={el.id}>
          {el.name}
        </li>
      ))}
    </ol>
  );
};

export default ContactsList;
