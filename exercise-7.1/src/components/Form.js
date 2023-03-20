import { useRef } from "react";

function Form() {
  const nameRef = useRef();
  const programRef = useRef('basics');

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("Entered Name: ", nameRef.current.value);
    console.log("Selected Program: ", programRef.current.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={programRef}>
          <option value="basics">The Basics</option>
          <option value="advanced">Advanced Concepts</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
