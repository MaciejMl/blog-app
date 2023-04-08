import { Link } from 'react-router-dom';
import { getPostId } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { getCategoryId } from '../../../redux/categoryRedux';

const PostBrief = (props) => {
  const posts = useSelector((state) => getPostId(state, props.id));
  const categories = useSelector((state) =>
    getCategoryId(state, props.categoryId)
  );

  return (
    <article className='border border-grey rounded p-3 pt-1 mt-4 mb-2'>
      <h2>{props.title}</h2>
      <p className='mb-0'>
        <span className='fw-bold'>Author: </span>
        {props.author}
      </p>
      <p className='mb-0'>
        <span className='fw-bold'>Published: </span>
        {format(props.publishedDate, 'dd/MM/yyyy')}
      </p>
      <p>
        <span className='fw-bold'>Category: </span>
        {categories.categoryName}
      </p>
      <p>{props.shortDescription}</p>

      <Link to={`/post/${posts.id}`}>
        <button className='btn btn-primary'>Read more</button>
      </Link>
    </article>
  );
};

export default PostBrief;
