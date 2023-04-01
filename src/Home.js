import { Container } from 'react-bootstrap';
import PostBrief from './components/features/PostBrief/PostBrief';
import Stack from 'react-bootstrap/Stack';
import { getPosts } from './redux/postsRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = useSelector(getPosts());
  return (
    <div>
      <Container className='px-0'>
        <Stack direction='horizontal'>
          <h1 className='col-2'>All posts</h1>
          <Link to={`/post/add`} className='ms-auto'>
            <button className='btn btn-outline-info'>Add post</button>
          </Link>
        </Stack>
      </Container>

      <Container className='row px-0'>
        {posts.map((post) => (
          <PostBrief key={post.id} {...post} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
