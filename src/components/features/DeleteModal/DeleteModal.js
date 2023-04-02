import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removePost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';

const DeleteModal = (props) => {
  const dispatch = useDispatch();

  const delPost = () => {
    dispatch(removePost(props.postId));
    props.handleClose();
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          'This operation will completely remove this post from the App.
          <br />
          Are you sure you want to do that ?'
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
          <Button variant='danger' onClick={delPost}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
