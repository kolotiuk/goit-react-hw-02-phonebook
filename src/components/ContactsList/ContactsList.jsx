const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} id={id} name={name} number={number}>
          {name}: {number}
          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
