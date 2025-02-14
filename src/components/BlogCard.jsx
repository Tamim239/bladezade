import PropTypes from 'prop-types'; 
import Error from '../assets/404.jpg';
import { Link } from 'react-router-dom';
export const BlogCard = ({blog}) => {
    const {title, cover_image, description, published_at, id} = blog
  return (
    <Link to={`/blog/${id}`}
    rel="noopener noreferrer"
    href="#"
    className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
  >
    <img  alt='blogs'
      role="presentation"
      className="object-cover w-full rounded h-44 dark:bg-gray-500"
      src={cover_image || Error}
    />
    <div className="p-6 space-y-2">
      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
       {title}
      </h3>
      <span className="text-xs dark:text-gray-600">
       {new Date(published_at).toLocaleDateString()}
      </span>
      <p>
       {description}
      </p>
    </div>
  </Link>
  )
}


BlogCard.propTypes ={
    blog: PropTypes.object
}