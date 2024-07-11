import { useState } from 'react';
const Form = ({ setQuestion }) => {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setQuestion(text);
    setText('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          name='question'
          placeholder='What do you need to know?'
        />
        <br />
        <input type='submit' value='Ask you questions to the spirits' />
      </form>
    </div>
  );
};

export default Form;
