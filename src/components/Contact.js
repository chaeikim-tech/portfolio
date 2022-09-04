import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetils = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetils);




    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return (
        <section className='contact' id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} >
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6} >
                        <h2>Get In Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} ></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                </Col>
                                <Col sm={6} className="px-1">
                                </Col>
                                <Col sm={6} className="px-1">
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}