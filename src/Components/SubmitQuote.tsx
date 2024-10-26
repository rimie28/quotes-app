import { useState } from 'react';
import * as React from 'react';


const SubmitQuote = () => {
  const [formState, setFormState] = useState({
    category: '',
    author: '',
    text: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState, [
        name]: value
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return(
    <div className="container">
      <div className="row">
        <h2>Submit new quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              className="form-control"
              value={formState.category}
              onChange={onChange}
              name="category"
              id="category"
            ></select>
          </div>
          <div className="form-group">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              className="form-control"
              value={formState.author}
              onChange={onChange}
              name = "author"
              id="author"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="text" className="form-label">Quote Text</label>
            <textarea
            className="form-control"
            value={formState.text}
            onChange={onChange}
            name="text"
            id="text">
            </textarea>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  )
}

export default SubmitQuote;