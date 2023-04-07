import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
// import pl from 'date-fns/locale/pl';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setMainContent] = useState(props.content || '');

  // registerLocale('pl', pl);

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
        <DatePicker
          dateFormat='dd/MM/yyyy'
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
          // locale='pl'
        />
        {/* <Form.Control
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
        /> */}
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
        <ReactQuill
          theme='snow'
          value={content}
          placeholder='Leave a comment here'
          onChange={setMainContent}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
