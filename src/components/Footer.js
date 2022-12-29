import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import logo from '../img/logo.png';
import m from '../img/m.jpg';
import wm from '../img/wm.jpg';
import './Footer.css'



const Footer = () => {
    return (

        <div className='footer' >
            <div className='container'>
                <div className='grid'>
                    <div className='gridhead' > <br></br></div>
                    <div>

                        <a href='logo.png'><img className="imgf" src={logo} alt='logo' ></img></a>
                        <p>ComidApp<br/>2022</p>
                    </div>


                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img className="imgf rounded-circle" src={m} alt="First slide" />
                                <br></br><br></br><br></br><br></br><br></br>
                                <Carousel.Caption>

                                    <p>Matías Nicolas Bravo Nerón</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                            <Carousel.Item>
                                <img className="imgf rounded-circle" src={wm} alt="Third slide" />
                                <br></br><br></br><br></br><br></br><br></br>
                                <Carousel.Caption>
                                    <br></br>

                                    <p>Paula de Figueiredo</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgf rounded-circle" src={m} alt="Third slide" />
                                <br></br><br></br><br></br><br></br><br></br>
                                <Carousel.Caption>
                                    <br></br>

                                    <p>Braian D'Aleo</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="imgf rounded-circle" src={m} alt="Third slide" />
                                <br></br><br></br><br></br><br></br><br></br>
                                <Carousel.Caption>
                                    <br></br>

                                    <p>Daniel Alberto Rocha Bartaburu</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="justify-content-sm-center">
                                <img className="imgf rounded-circle" src={m} alt="Third slide" />
                                <br></br><br></br><br></br><br></br><br></br>
                                <Carousel.Caption>
                                    <br></br>

                                    <p>Dario Fabian Guardiola</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="justify-content-sm-center">
                                <img className="imgf rounded-circle" src={m} alt="Third slide" />
                                <br></br><br></br><br></br><br></br><br></br>
                                <Carousel.Caption>
                                    <br></br>

                                    <p>Facundo G. Miranda</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                           
                            <Carousel.Item className="justify-content-sm-center">
                                <img className="imgf rounded-circle" src={m} alt="Third slide" />
                                <br></br><br></br><br></br><br></br><br></br>
                                <Carousel.Caption>
                                    <br></br><br></br><br></br><br></br>

                                    <p>Ramiro Hittaller</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <p> Creado con <a href="https://es.reactjs.org/">React</a>, <a href="https://sweetalert2.github.io/">SweetAlert</a>, <a href="https://getbootstrap.com/">Bootstrap</a>, <a href="https://firebase.google.com/?hl=es">Firebase</a>.</p>
            </div>

        </div>

    )
}
export default Footer