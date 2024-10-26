import { useState } from 'react';
import * as React from 'react';
import axios from 'axios';


const SubmitQuote = () => {
  const categories = [
    {category: 'Star Wars', id: 'star-wars'},
    {category: 'Famous people', id: 'famous-people'},
    {category: 'Saying', id: 'saying'},
    {category: 'Humour', id: 'humor'},
    {category: 'Motivational', id: 'motivational'},
  ]

  const [formState, setFormState] = useState({
    category: '',
    author: '',
    text: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('https://server-1-adbbe-default-rtdb.europe-west1.firebasedatabase.app/quotes.json', formState);

      setFormState({
        author: '',
        text: '',
        category: ''
      });
    } catch (error) {
      console.log(error)
    }
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
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.category}
                </option>
              ))}
                </select>
                </div>
                <div className="form-group">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                className="form-control"
                value={formState.author}
              onChange={onChange}
              name="author"
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
          <button type="submit" className="btn btn-primary mt-3">Save</button>
        </form>
      </div>
    </div>
  )
}

export default SubmitQuote;