import { useParams, Navigate } from 'react-router-dom';
import { getPostId } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';

const Post = () => {
  const { id } = useParams();
  const posts = useSelector((state) => getPostId(state, id));

  if (!posts) return <Navigate to='/' />;
  return (
    <div>
      <h1>POST</h1>
    </div>
  );
};

export default Post;
