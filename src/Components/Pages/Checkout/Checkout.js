
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Pageheader from '../../Global/Pageheader/Pageheader';
// import useTour from '../../../Hooks/useTours';
// import Tourloop from '../../Templates/Tourloop/Tourloop';





const Checkout = () => {
    const { id } = useParams();
    // const [tour] = useTour();
    // let singleTourArray = tour.filter(x => x.id === id);
    // console.log(singleTourArray[0]);


    const handleBooking = (event) =>{
        event.preventDefault();
        toast.success("Thanks for your booking!")
    }




    return (
        <div id='page-checkout'>
            <Pageheader title={"Booking for "+id } subtitle={"Get Tour Booking Today "} ></Pageheader>
            <Container>

                <div className="py-5">
                    <Row>
                        <Col md={7}>
                            <div className="checkout-form p-5">
                                <Form onSubmit={handleBooking}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Adress</Form.Label>
                                        <Form.Control type="text" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Confirm Booking
                                    </Button>

                                </Form>

                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="p-5">
                                <h2 > Book now: {id}</h2>
                            </div>

                        </Col>
                    </Row>
                </div>
                <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                
            </Container>
        </div>
    );
};

export default Checkout;