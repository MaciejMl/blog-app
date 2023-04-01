import { Container, Row, Col } from 'react-bootstrap';
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
          <h1>All posts</h1>
          <Link to={`/post/add`} className='ms-auto'>
            <button className='btn btn-outline-info'>Add post</button>
          </Link>
        </Stack>
      </Container>

      <Container className='px-0'>
        <Row className='gx-3'>
          {posts.map((post) => (
            <Col key={post.id} md={6} lg={4}>
              <PostBrief {...post} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
