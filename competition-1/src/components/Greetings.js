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
    default:
      greeting = `Hello ${children}`;
      break;
  }

  return (
    <div
      style={{
        outline: '2px solid black',
        marginTop: "20px",
        marginLeft: "5px",
        width: "500px",
        padding: "5px"
      }}
    >
      <p>{greeting}</p>
    </div>
  );
};

export default Greetings;