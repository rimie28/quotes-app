import { Link } from 'react-router-dom';


const Sidebar = () => {
  const categories = [
    {category: 'Star Wars', id: 'star-wars'},
    {category: 'Famous people', id: 'famous-people'},
    {category: 'Saying', id: 'saying'},
    {category: 'Humour', id: 'humor'},
    {category: 'Motivational', id: 'motivational'},
  ]

  return (
    <div className="d-flex flex-column gap-2">
      <h4>Categories:</h4>
      {categories.map(category => (
        <Link className="text-decoration-none text-black" key={category.id} to={`/categories/${category.id}`}>
          {category.category}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar