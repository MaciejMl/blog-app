import { useParams, Navigate } from 'react-router-dom';
import { getPostId } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Stack, Row } from 'react-bootstrap';
import DeleteModal from '../../features/DeleteModal/DeleteModal';
import { useState } from 'react';

const Post = () => {
  const { id } = useParams();
  const posts = useSelector((state) => getPostId(state, id));
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
          <p>
            <span className='fw-bold'>Published: </span>
            {posts.publishedDate}
          </p>
          <p>{posts.content}</p>
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
