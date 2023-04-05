import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost() {
  const [sending, setSending] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState('');

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  async function submitHandler(event) {
    event.preventDefault();
    setSending(true)
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", body: JSON.stringify({ title: enteredTitle })
    })
    setSending(false)
    setEnteredTitle('')
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button disabled={sending}>
        { sending ? 'Saving…' : 'Save' }
      </button>
    </form>
  );
}

export default NewPost;
