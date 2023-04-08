import { Container, Row, Col } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import { changeCategoryNameToIdLower } from '../../../redux/categoryRedux';
import { useParams, Navigate } from 'react-router-dom';
import PostBrief from '../../features/PostBrief/PostBrief';
import { useSelector } from 'react-redux';
import { getPosts } from '../../../redux/postsRedux';

const CategoryGroup = () => {
  const { name } = useParams();

  const singleGroup = useSelector((state) =>
    changeCategoryNameToIdLower(state, name)
  );
  const allPosts = useSelector(getPosts());
  const filteredPosts = allPosts.filter(
    (post) => post.categoryId === singleGroup?.id
  );

  if (!singleGroup) return <Navigate to='/category' />;
  else
    return (
      <div>
        <Container className='px-0'>
          <Stack direction='horizontal'>
            <h1>
              Category: <span>{singleGroup.categoryName}</span>
            </h1>
          </Stack>
        </Container>

        <Container className='px-0'>
          {filteredPosts && (
            <Row className='gx-3'>
              {filteredPosts.map((post) => (
                <Col key={post.id} md={6} lg={4}>
                  <PostBrief {...post} />
                </Col>
              ))}
            </Row>
          )}
          {!filteredPosts.length && <p>No posts in this category...</p>}
        </Container>
      </div>
    );
};

export default CategoryGroup;
