import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setMainContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
          onBlur={(e) => {
            const date = new Date(e.target.value);
            const options = {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            };
            const formattedDate = date.toLocaleDateString('en-GB', options);
            setPublishedDate(formattedDate.replace(/\//g, '-'));
          }}
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
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
