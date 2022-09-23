const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id} id={el.id} name={el.name} number={el.number}>
          {el.name}: {el.number}
          <button type="button" onClick={() => handleDelete(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
