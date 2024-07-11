import { useState, useEffect } from 'react';
import responses from './utilities/magic8ball';
import Form from './components/Form';

import './App.css';

function App() {
  const [res, setRes] = useState(null);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    let rand = Math.round(Math.random() * responses.length);
    setRes(responses[rand]);
  }, [question]);
  
  return (
    <>
      <h1>Ask Away!</h1>
      <Form setQuestion={setQuestion} />
      {question && <h2>{question}</h2>}
      {res ? <h2>{res}</h2> : <h2>Pending Response</h2>}
    </>
  );
}

export default App;
