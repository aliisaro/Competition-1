import React from 'react';

const Greetings = ({ lang, children }) => {
  let greeting;

  switch (lang) {
    case 'de':
      greeting = `Hallo ${children}`;
      break;
    case 'fr':
      greeting = `Bonjour ${children}`;
      break;
    case 'es':
      greeting = `Hola ${children}`;
      break;    
    case 'en':
      greeting = `Hello ${children}`;
      break;
  }

  return (
    <div
      style={{
        outline: '2px solid black',
        marginTop: "20px",
        width: "600px",
        padding: "5px",
        fontFamily: "sans-serif"}}
    >
      <p style={{fontSize: 25, margin: 7, marginLeft: 5}}>{greeting}</p>
    </div>
  );
};

export default Greetings;