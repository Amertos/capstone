import React, { useState } from 'react';

export default function SettingsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved", name, email);
    alert("Settings saved!");
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        <br />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
