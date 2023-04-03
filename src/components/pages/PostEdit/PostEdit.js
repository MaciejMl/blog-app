import { Row } from 'react-bootstrap';
import EditPostForm from '../../features/EditPostForm/EditPostForm';

const PostEdit = () => {
  return (
    <Row className='justify-content-center'>
      <div className='col-md-6'>
        <h2>EDIT FORM</h2>
        <EditPostForm />
      </div>
    </Row>
  );
};

export default PostEdit;
