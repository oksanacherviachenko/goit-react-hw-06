import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './redux/contactsSlice';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder="Number" />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;



