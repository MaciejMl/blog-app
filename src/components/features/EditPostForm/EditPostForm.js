import { useSelector, useDispatch } from 'react-redux';
import { editPost, getPostId } from '../../../redux/postsRedux';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const post = useSelector((state) => getPostId(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };
  if (!post) return <Navigate to='/' />;
  else
    return (
      <PostForm action={handleSubmit} actionText={'Edit Post'} {...post} />
    );
};

export default EditPostForm;
