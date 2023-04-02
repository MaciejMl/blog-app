import { useParams, Navigate } from 'react-router-dom';
import { getPostId } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Stack, Row } from 'react-bootstrap';

const Post = (props) => {
  const { id } = useParams();
  const posts = useSelector((state) => getPostId(state, id));

  if (!posts) return <Navigate to='/' />;
  return (
    <Row className='justify-content-center'>
      <article className='col-6 p-3 pt-1 mt-4 mb-2'>
        <Container className='px-0'>
          <Stack direction='horizontal' gap={2} className='align-items-start'>
            <h2 className='mb-5'>{posts.title}</h2>

            <Link to={`/post/edit/${posts.id}`} className='ms-auto'>
              <button className='btn btn-outline-info'>Edit</button>
            </Link>

            <Link to={`/post/${posts.id}`}>
              <button className='btn btn-outline-danger'>Delete</button>
            </Link>
          </Stack>
        </Container>
        <p className='mb-0'>
          <span className='fw-bold'>Author: </span>
          {posts.author}
        </p>
        <p>
          <span className='fw-bold'>Published: </span>
          {posts.publishedDate}
        </p>
        <p>{posts.content}</p>
      </article>
    </Row>
  );
};

export default Post;
