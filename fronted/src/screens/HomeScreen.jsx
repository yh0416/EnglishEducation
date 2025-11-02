import { Row, Col } from 'react-bootstrap';
import Prodcut from '../components/Prodcuts';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>Past Exams</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Prodcut product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
