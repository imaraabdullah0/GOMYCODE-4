import Carousel from 'react-bootstrap/Carousel';
import beach2 from '../photos/beach2.png';
import beach3 from '../photos/beach3.png';
import beach5 from '../photos/beach5.png';
import Singin from './Signin';
import './Slider.css';

function Slider() {
  return (
    <div className='big'>
    <div className='row' >
    <Carousel className='col-md-6 '  fade>
      <Carousel.Item className=''>
        <img
          className=""
          src={beach2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3><strong>Front-end web develpment</strong></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={beach3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3><strong>back-end web develpment</strong></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={beach5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3><strong>React.JS</strong></h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='col-md-6' >
    <Singin />
    </div>
    </div>
    </div>
  );
}

export default Slider;