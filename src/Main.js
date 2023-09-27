import { Col, Row } from 'react-bootstrap';
import BreadcrumbExample from './BreadcrumbExample';
import CenterText from './CenterText';

function MainExample() {
  return (
   <div style={{
    backgroundColor: 'lightblue',
    height: '100vh'
   }}>
    <Row>
        <Col>
            <BreadcrumbExample />
        </Col>
    </Row>
    <Row>
        <Col >
                <CenterText text='Main'/>
        </Col>
    </Row>
   </div>
  );
}

export default MainExample;