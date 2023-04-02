import { Row } from 'react-bootstrap';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostAdd = () => {
  return (
    <Row className='justify-content-center'>
      <div className='col-6'>
        <h2>ADD POST</h2>
        <AddPostForm />
      </div>
    </Row>
  );
};

export default PostAdd;
