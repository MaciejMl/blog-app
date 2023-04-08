import { Container, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoryRedux';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categoryLinks = useSelector(getAllCategories());

  return (
    <Row className='justify-content-center'>
      <Container className='col-md-6 px-0'>
        <h1 className='mb-5'>All categories</h1>
        {categoryLinks.map((link, index) => (
          <Stack key={link.id} direction='horizontal'>
            <Link
              to={`/category/${link.categoryName.toLowerCase()}`}
              className={`border border-grey p-1 w-100 ${
                index === 0 ? 'rounded-top' : ''
              } ${index === categoryLinks.length - 1 ? 'rounded-bottom' : ''}`}
            >
              {link.categoryName}
            </Link>
          </Stack>
        ))}
      </Container>
    </Row>
  );
};

export default Categories;
