import { useParams, Navigate, Link } from 'react-router-dom';
import { getPostId } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Container, Stack, Row } from 'react-bootstrap';
import DeleteModal from '../../features/DeleteModal/DeleteModal';
import { useState } from 'react';
import { format } from 'date-fns';
import { getCategoryId } from '../../../redux/categoryRedux';

const Post = () => {
  const { id } = useParams();
  const posts = useSelector((state) => getPostId(state, id));
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const categories = useSelector((state) =>
    getCategoryId(state, posts.categoryId)
  );

  if (!posts) return <Navigate to='/' />;
  else
    return (
      <Row className='justify-content-center'>
        <article className='col-md-6 p-3 pt-1 mt-4 mb-2'>
          <Container className='px-0'>
            <Stack direction='horizontal' gap={2} className='align-items-start'>
              <h2 className='mb-5'>{posts.title}</h2>

              <Link to={`/post/edit/${posts.id}`} className='ms-auto'>
                <button className='btn btn-outline-info'>Edit</button>
              </Link>

              <button
                className='btn btn-outline-danger'
                onClick={() => setShowDeleteModal(true)}
              >
                Delete
              </button>
            </Stack>
          </Container>
          <p className='mb-0'>
            <span className='fw-bold'>Author: </span>
            {posts.author}
          </p>
          <p className='mb-0'>
            <span className='fw-bold'>Published: </span>
            {format(posts.publishedDate, 'dd/MM/yyyy')}
          </p>
          <p>
            <span className='fw-bold'>Category: </span>
            {categories.categoryName}
          </p>
          <p dangerouslySetInnerHTML={{ __html: posts.content }} />
        </article>
        <DeleteModal
          show={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          postId={id}
        />
      </Row>
    );
};

export default Post;
