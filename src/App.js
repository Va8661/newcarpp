import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTrophy } from 'react-icons/fa';
import './App.css';

const cars = [
  {
    name: 'Koenigsegg Regera',
    image: 'https://www.supervettura.com/blobs/Cars/165/5435811e-25ad-40f4-a588-8602d720c244.jpg?width=1920&height=1080&mode=crop',
    description: 'Base price: $1,900,000 , Engine: 5.0L TT V8 + 3 electric motors , Power: 1,489 hp , Torque: 1,475 lb-ft , 0-60 mph: 2.5 s , Top Speed: 249 mph'
  },
  {
    name: 'Pagani',
    image: 'https://cdn.carbuzz.com/gallery-images/2018-pagani-huayra-carbuzz-703344.jpg',
    description: 'Base PRice:$14,00,000 , Engine: Mercedes-AMG M158 V12 Twin-Turbo , Horsepower: 730hp , Torque (SAE net): 738lb ft at 2250-4500rpm , 0–60 mph (97 km/h):  3.2 sec , Top speed: 230 mp'
  },
  {
    name: 'Bugatti Vision Gran Turismo',
    image: 'https://www.supercars.net/blog/wp-content/uploads/2016/03/2015_Bugatti_VisionGranTurismo-0-1024.jpg',
    description: 'Engine:W16 quad turbo , Max Power:1,626 BHP/6,500 rpm , Performance Points:908.39 PP , Top Speed:464 kilometres per hour (288 mph) , Weight:1,400 kilograms (3,100 lb)'
  },
  {
    name: 'Lamborgini Huraccan',
    image: 'https://www.supercars.net/blog/wp-content/uploads/2019/06/Lamborghini-Aventador-LP700-4-390x390.jpg',
    description: 'Engine: 6.5L Nat Aspirated V12 , Power: 700 bhp @ 8,250 rpm , Torque: 509 ft lbs @ 5,500 rpm , 0-60 mph: 2.9 seconds , Top Speed: 217 mph'
  },
  {
    name: 'maclren gt',
    image: 'https://www.supercars.net/blog/wp-content/uploads/2022/01/McLaren-GT-2048x1211.jpg',
    description: 'Base price: US$215,000 , Engine: 4.0 L M840TE twin-turbocharged V8 , Power: 612 hp @ 7,500 rpm , Torque: 465 lb-ft @ 5,500 rpm , 0-60 mph: 2.8 s , 0-124 mph: 9.0 s , Top Speed: 203 mph'
  },
];

function App() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <h1><FaTrophy /> Best Cars</h1>
      </Row>
      <Row className="justify-content-center mt-3">
        {cars.map((car, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={car.image} />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>{car.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
