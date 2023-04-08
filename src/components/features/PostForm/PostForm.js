import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import {
  getAllCategories,
  changeCategoryNameToId,
} from '../../../redux/categoryRedux';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [category, setCategory] = useState(props.categoryName || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setMainContent] = useState(props.content || '');

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const categoryList = useSelector(getAllCategories());
  const findCategoryName = useSelector((state) =>
    changeCategoryNameToId(state, category)
  );

  const handleSubmit = (e) => {
    // e.preventDefault();
    setContentError(!content);
    setDateError(!publishedDate);
    setCategoryError(!findCategoryName);
    if (content && publishedDate && category) {
      action({
        title,
        author,
        publishedDate,
        categoryId: findCategoryName.id,
        shortDescription,
        content,
      });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className='mb-3 col-6' controlId='exampleForm.ControlInput1'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true, minLength: 4 })}
          type='text'
          value={title}
          placeholder='Enter title'
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required and must be longer then 3 chars
          </small>
        )}

        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, minLength: 4 })}
          type='text'
          value={author}
          placeholder='Enter author'
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required and must be longer then 3 chars
          </small>
        )}

        <Form.Label>Published</Form.Label>
        <DatePicker
          dateFormat='dd/MM/yyyy'
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
        />
        {dateError && (
          <small className='d-block form-text text-danger mt-2'>
            Date can't be empty
          </small>
        )}
      </Form.Group>

      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select category...</option>
          {categoryList.map((category) => (
            <option key={category.id}>{category.categoryName}</option>
          ))}
        </Form.Select>
        {categoryError && (
          <small className='d-block form-text text-danger mt-2'>
            Category can't be empty
          </small>
        )}

        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 20 })}
          as='textarea'
          value={shortDescription}
          rows={3}
          placeholder='Leave a comment here'
          onChange={(e) => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required and must have at least 20 chars
          </small>
        )}

        <Form.Label>Main content</Form.Label>
        <ReactQuill
          theme='snow'
          value={content}
          placeholder='Leave a comment here'
          onChange={setMainContent}
        />
        {contentError && (
          <small className='d-block form-text text-danger mt-2'>
            Content can't be empty
          </small>
        )}
      </Form.Group>
      <Button variant='primary' type='submit'>
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
