import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setMainContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTitle = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
      }),
      navigate('/')
    );
  };

  return (
    <Form onSubmit={handleTitle}>
      <Form.Group className='mb-3 col-6' controlId='exampleForm.ControlInput1'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          value={title}
          placeholder='Enter title'
          onChange={(e) => setTitle(e.target.value)}
        />

        <Form.Label>Author</Form.Label>
        <Form.Control
          type='text'
          value={author}
          placeholder='Enter author'
          onChange={(e) => setAuthor(e.target.value)}
        />

        <Form.Label>Published</Form.Label>
        <Form.Control
          type='date'
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as='textarea'
          value={shortDescription}
          rows={3}
          placeholder='Leave a comment here'
          onChange={(e) => setShortDescription(e.target.value)}
        />

        <Form.Label>Main content</Form.Label>
        <Form.Control
          as='textarea'
          value={content}
          rows={5}
          placeholder='Leave a comment here'
          onChange={(e) => setMainContent(e.target.value)}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add post
      </Button>
    </Form>
  );
};

export default AddPostForm;
